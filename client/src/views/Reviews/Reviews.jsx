import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/authContex";
import { useEffect } from "react";
import {
  getUserByUid,
  editReview,
  deleteReview,
} from "../../Redux/actions/actions";
import { Link } from "react-router-dom";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Stars from "../../components/Stars/Stars";

const Reviews = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userUid = user?.uid;
  useEffect(() => {
    dispatch(getUserByUid(userUid));
  }, [dispatch, userUid]);
  const userData = useSelector((state) => state.user);

  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editedReviewText, setEditedReviewText] = useState("");
  const [editedRating, setEditedRating] = useState(0);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - rating <= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const startReviewEdit = (review) => {
    setEditingReviewId(review._id);
    setEditedReviewText(review.reviewText);
    setEditedRating(review.rating);
  };

  const cancelReviewEdit = () => {
    setEditingReviewId(null);
    setEditedReviewText("");
    setEditedRating(0);
  };

  const saveReviewChanges = async (reviewId) => {
    const data = {
      reviewText: editedReviewText,
      rating: editedRating,
    };
    await dispatch(editReview(data, reviewId));
    dispatch(getUserByUid(userUid));
    setEditingReviewId(null);
    setEditedReviewText("");
    setEditedRating(0);
    toast.success("Your changes have been saved");
  };

  const handleDeleteReview = async (reviewId) => {
    await dispatch(deleteReview(reviewId));
    dispatch(getUserByUid(userUid));
    toast.success("Your review has been removed");
  };

  return (
    <div className="pt-8 flex flex-col items-center justify-center bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <div className="grid w-3/4">
        <p className="text-3xl font-medium mb-4">My Reviews</p>
        {userData?.userReviews?.length === 0 ? (
          <p className="text-gray-400 flex items-center justify-center">
            No reviews have been made with this account.
          </p>
        ) : (
          userData?.userReviews?.map((review) => (
            <div
              key={review._id}
              className="text-left mt-5 mb-5 m-4 bg-white pt-5 pb-5 border border-gray-200 rounded-lg"
            >
              <div className="border-b-1 border-gray-200">
                <cite className="ml-3 font-semibold text-gray-800 text-sm block mb-5">
                  {new Date(review.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </cite>
              </div>
              <div className="border border-gray-200 rounded-lg">
                <div className="mt-5 flex mr-5 ml-5 flex-col rounded-lg bg-white sm:flex-row border-b border-gray-200 last:border-b-0">
                  <img
                    className="m-2 h-40 sm:h-40 w-40 sm:w-40 rounded-md border object-cover object-center"
                    src={review.product?.image}
                    alt=""
                  />
                  <div className="flex w-full flex-col justify-between px-4 py-4">
                    {editingReviewId === review._id ? (
                      <div>
                        <span className="font-semibold text-xl">
                          {review.product?.name}
                        </span>
                        <textarea
                          className="mt-2 p-2 border rounded-md resize-none w-full"
                          value={editedReviewText}
                          onChange={(e) => setEditedReviewText(e.target.value)}
                          style={{ minHeight: "100px" }}
                        ></textarea>
                        <div className="flex mt-2">
                          <Stars handleRating={setEditedRating}></Stars>
                          <button
                            className="text-white bg-black hover:bg-sky-700 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center m-1"
                            onClick={() => saveReviewChanges(review._id)}
                          >
                            Save
                          </button>
                          <button
                            className="text-black bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center m-1"
                            onClick={cancelReviewEdit}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Link
                          to={`/products/${review.product?._id}`}
                          className="font-semibold text-xl"
                        >
                          {review.product?.name}
                        </Link>
                        <p className="text-sm">{review.reviewText}</p>
                        <div className="flex mt-2">
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                          <button
                            className="text-white bg-black hover:bg-sky-700 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center m-1"
                            onClick={() => startReviewEdit(review)}
                          >
                            Edit
                          </button>
                          <button
                            className="text-white bg-black hover:bg-red-700 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center m-1"
                            onClick={() => handleDeleteReview(review._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
