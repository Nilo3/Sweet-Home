import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/authContex";
import { useEffect, useState } from "react";
import { getUserByUid, postReview } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";
import Stars from "../../components/Stars/Stars";
import { toast } from "react-toastify";

const Purchases = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userUid = user?.uid;
  useEffect(() => {
    if (user) {
      dispatch(getUserByUid(userUid));
    }
  }, [dispatch, userUid, user]);

  const userData = useSelector((state) => state.user);
  const userOrders = userData?.userOrders || [];
  const [reviewNumber, setReviewNumber] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [creatingReviewId, setCreatingReviewId] = useState(null);

  const handleText = (e) => {
    setReviewText(e.target.value);
  };

  const cancelReviewCreation = () => {
    setCreatingReviewId(null);
    setReviewNumber(0);
    setReviewText("");
  };

  const saveReview = (productId) => {
    let reviewProduct = {
      rating: reviewNumber,
      reviewText: reviewText,
      createdBy: userData._id,
      product: productId,
    };
    toast.success("Review saved correctly");
    dispatch(postReview(reviewProduct));
    cancelReviewCreation();
  };
  const handleDetail = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pt-8 flex flex-col items-center justify-center bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <div className="grid w-3/4 select-none">
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
                  key={product?.product?._id}
                >
                  <img
                    className="m-2 h-40 sm:h-40 w-40 sm:w-40 rounded-md border object-cover object-center"
                    src={product?.product?.image}
                    alt=""
                  />
                  <div className="flex w-full flex-col justify-between px-4 py-4">
                    <div>
                      <p className="text-sm text-green-500">Delivered</p>
                      <div onClick={handleDetail}>
                        <Link to={`/products/${product.product?._id}`}>
                          <span className="font-semibold text-xl">
                            {product?.product?.name}
                          </span>
                        </Link>
                      </div>
                      <p className="text-sm">
                        Price: $
                        {(product?.product?.price * product?.quantity).toFixed(
                          2
                        )}
                      </p>
                      <p className="text-xs">Quantity: {product?.quantity}</p>
                    </div>
                    <div className="mt-3">
                      {creatingReviewId !== product?.product?._id ? (
                        <button
                          className="text-white bg-black hover:bg-neutral-800 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center"
                          onClick={() =>
                            setCreatingReviewId(product?.product?._id)
                          }
                        >
                          Write Review
                        </button>
                      ) : (
                        <div>
                          <Stars handleRating={setReviewNumber} />
                          <textarea
                            className="w-full ml-3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 mt-2"
                            name="reviewtext"
                            placeholder="Insert your review"
                            onChange={handleText}
                            value={reviewText}
                          ></textarea>
                          <div className="flex justify-end mt-2">
                            <button
                              className="text-black bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center mr-2"
                              onClick={cancelReviewCreation}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="text-white bg-black hover:bg-neutral-800 font-medium rounded-lg text-sm px-3 py-1.5 cursor-pointer select-none text-center"
                              onClick={() => saveReview(product.product._id)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      )}
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
  );
};

export default Purchases;
