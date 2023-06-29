import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineReviews } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../context/authContex";
import { useEffect } from "react";
import { getUserByUid, editReview, deleteReview } from "../../Redux/actions/actions"
import { Link } from "react-router-dom";
// import Profile from "../Profile/Profile";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";

const User = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userUid = user.uid;
  useEffect(() => {
    dispatch(getUserByUid(userUid));
  }, [dispatch, userUid]);
  const userData = useSelector((state) => state.user);
  const userOrders = userData?.userOrders || [];

  const [selectedSection, setSelectedSection] = useState("profile");

  const handleSection = (section) => {
    setSelectedSection(section);
  };

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
    toast.success("Your changes have been saved")
  };

  const handleDeleteReview = async (reviewId) => {
    await dispatch(deleteReview(reviewId));
    dispatch(getUserByUid(userUid));
    toast.success("Your review has been removed")
  };
  
  return (
    <div className="flex">
      <aside
        id="cta-button-sidebar"
        className="relative left-0 z-45 w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="ml-3 h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 w-full">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedSection === "profile"
                    ? " border-gray-100 bg-gray-400 dark:bg-gray-900"
                    : ""
                }`}
                onClick={() => handleSection("profile")}
              >
                <svg
                  aria-hidden="true"
                  className="mt-2 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <BiUserCircle />
                </svg>
                <span className="ml-3 text-m">Profile</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedSection === "purchases"
                    ? " border-gray-100 bg-gray-400 dark:bg-gray-900"
                    : ""
                }`}
                onClick={() => handleSection("purchases")}
              >
                <svg
                  aria-hidden="true"
                  className="mt-1 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <HiOutlineShoppingBag />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Purchases</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedSection === "reviews"
                    ? " border-gray-100 bg-gray-400 dark:bg-gray-900"
                    : ""
                }`}
                onClick={() => handleSection("reviews")}
              >
                <svg
                  aria-hidden="true"
                  className="mt-2 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <MdOutlineReviews />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {selectedSection === "profile" && (
        <div className="pt-20 flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          {/* <Profile /> */}
        </div>
      )}

      {selectedSection === "purchases" && (
        <div className="pt-8 flex flex-col items-center justify-center  bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <div className="grid w-3/4">
            <p className="text-3xl font-medium mb-4">My purchases</p>
            {userOrders.map((order) => (
              <div
                key={order._id}
                className="text-left mt-5 mb-5 m-4 bg-white pt-5 pb-5 border border-gray-200 rounded-lg"
              >
                <div className="border-b-1 border-gray-200">
                  <cite className="ml-3 font-semibold text-gray-800 text-sm block mb-5">
                    {new Date(order.paidAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </cite>
                </div>
                <div className="border border-gray-200 rounded-lg">
                  {order.products?.map((product) => (
                    <div
                      className="mt-5 flex mr-5 ml-5 flex-col rounded-lg bg-white sm:flex-row border-b border-gray-200 last:border-b-0"
                      key={product.product._id}
                    >
                      <img
                        className="m-2 h-40 sm:h-40 w-40 sm:w-40 rounded-md border object-cover object-center"
                        src={product.product.image}
                        alt=""
                      />
                      <div className="flex w-full flex-col justify-between px-4 py-4">
                        <div>
                          <p className="text-sm text-green-500">Delivered</p>
                          <span className="font-semibold text-xl">
                            {product.product.name}
                          </span>
                          <p className="text-sm">
                            Price: $
                            {(product.product.price * product.quantity).toFixed(
                              2
                            )}
                          </p>
                          <p className="text-xs">
                            Quantity: {product.quantity}
                          </p>
                        </div>
                        <div className="mt-3">
                          <Link
                            to={`/products/${product.product._id}`}
                            className="px-4 py-2 text-white bg-black rounded-lg inline-block"
                          >
                            View Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-800 font-semibold mt-5 text-right mr-3">
                  Total Price: ${order.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedSection === "reviews" && (
        <div className="pt-20 flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <div className="grid w-3/4">
            <p className="text-3xl font-medium mb-4">My Reviews</p>
            {userData?.userReviews.map((review) => (
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
                      src={review.product.image}
                      alt=""
                    />
                    <div className="flex w-full flex-col justify-between px-4 py-4">
                      {editingReviewId === review._id ? (
                        <div>
                          <span className="font-semibold text-xl">
                            {review.product.name}
                          </span>
                          <textarea
                            className="mt-2 p-2 border rounded-md resize-none"
                            value={editedReviewText}
                            onChange={(e) =>
                              setEditedReviewText(e.target.value)
                            }
                          ></textarea>
                          <div className="flex mt-2">
                            <div className="flex items-center">
                              {[...Array(editedRating)].map((_, index) => (
                                <FaStar
                                  key={index}
                                  className="text-yellow-500"
                                />
                              ))}
                              {[...Array(5 - editedRating)].map((_, index) => (
                                <FaRegStar
                                  key={index}
                                  className="text-yellow-500"
                                />
                              ))}
                            </div>
                            <button
                              className="ml-2 text-blue-500 hover:underline"
                              onClick={() => saveReviewChanges(review._id)}
                            >
                              Save
                            </button>
                            <button
                              className="ml-2 text-red-500 hover:underline"
                              onClick={cancelReviewEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Link to={`/products/${review.product._id}`}  className="font-semibold text-xl">
                            {review.product.name}
                          </Link>
                          <p className="text-sm">{review.reviewText}</p>
                          <div className="flex mt-2">
                            <div className="flex items-center">
                              {renderStars(review.rating)}
                            </div>
                            <button
                              className="ml-2 text-blue-500 hover:underline"
                              onClick={() => startReviewEdit(review)}
                            >
                              Edit
                            </button>
                            <button className="ml-2 text-red-500 hover:underline" onClick={() => handleDeleteReview(review._id)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
