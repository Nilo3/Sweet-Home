import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineReviews } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../context/authContex";
import { useEffect } from "react";
import { getUserByUid } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

const User = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userUid = user.uid;
  useEffect(() => {
    dispatch(getUserByUid(userUid));
  }, [dispatch, userUid]);
  const userData = useSelector((state) => state.user);
  const userOrders = userData?.userOrders || [];

  const [showPurchases, setShowPurchases] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleProductClick = (productId) => {
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <aside
        id="cta-button-sidebar"
        className="fixed top-16 left-0 z-50 w-64 h-screen overflow-y-auto bg-white dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setShowProfile(!showProfile)}
              >
                <svg
                  aria-hidden="true"
                  className="mt-2 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <BiUserCircle />
                </svg>
                <span className="ml-3 text-m">Profile</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setShowPurchases(!showPurchases)}
              >
                <svg
                  aria-hidden="true"
                  className="mt-1 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <HiOutlineShoppingBag />
                </svg>
                <span className="ml-3 text-m">Purchases</span>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="mt-2 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <MdOutlineReviews />
                </svg>
                <span className="ml-3 text-m">Reviews</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex flex-col items-center justify-center mt-14 ml-64">
        {showProfile && <Profile />}
        {showPurchases && (
          <div className="flex flex-wrap justify-center">
            {userOrders.length > 0 ? (
              userOrders.map((order) => (
                <article
                  key={order._id}
                  className="flex flex-wrap justify-start items-center w-full border border-gray-200 rounded-lg p-4 m-4 hover:shadow-md"
                >
                  <h2 className="w-full text-lg font-bold">
                    Order ID: {order._id}
                  </h2>
                  {order.products?.map((product) => (
                    <div
                      key={product._id}
                      className="m-2 w-full sm:w-60 border rounded-lg p-4"
                    >
                      <img
                        src={product.product.image}
                        alt={product.product.name}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <p className="text-lg font-bold mt-2">
                        {product.product.name}
                      </p>
                      <p className="text-gray-500">
                        ${product.product.price * product.quantity}
                      </p>
                      <p className="text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                      <Link
                        to={`/products/${product.product._id}`}
                        className=" bg-black text-white px-4 py-2 mt-4 rounded-lg inline-block hover:shadow-lg"
                      >
                        View Product
                      </Link>
                    </div>
                  ))}
                  <p className="w-full mt-4 font-bold">
                    Total: ${order.totalPrice.toFixed(2)}
                  </p>
                  <cite className="w-full mt-4 font-bold">
                    {new Date(order.paidAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </cite>
                </article>
              ))
            ) : (
              <p>No purchases found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
