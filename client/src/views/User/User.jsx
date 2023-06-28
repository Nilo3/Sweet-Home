import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineReviews } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../context/authContex";
import { useEffect } from "react";
import { getUserByUid } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";

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

  const handleProductClick = (productId) => {
    console.log("Clicked product:", productId);
  };

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="relative top-14 left-0 z-45 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="ml-3 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
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
                  <BiUserCircle />
                </svg>
                <span className="ml-3 text-m">Profile</span>
              </a>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setShowPurchases(!showPurchases)} // Cambia el estado para mostrar/ocultar las compras
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
      <div className="flex justify-center">
        {showPurchases && ( // Renderizado condicional para mostrar las compras
          <div className="flex justify-center">
            {userOrders.length > 0 ? (
              userOrders.map((order) => (
                <div
                  key={order._id}
                  className="border border-gray-300 rounded-lg p-4 m-4"
                >
                  <h2 className="text-lg font-bold">Order ID: {order._id}</h2>
                  <div className="flex flex-wrap justify-start items-center">
                    {order.products?.map((product) => (
                      <div
                        key={product._id}
                        className="m-2 w-60 border rounded-lg p-4"
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
                          Price: {product.product.price}
                        </p>
                        <p className="text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                        <Link
                          to={`/products/${product.product._id}`}
                          className=" bg-black text-white px-4 py-2 mt-4 rounded-lg inline-block"
                        >
                          View Product
                        </Link>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 font-bold">
                    Total Price: {order.totalPrice}
                  </p>
                  <cite className="mt-4 font-bold">
                  {new Date(order.paidAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </cite>
                </div>
              ))
            ) : (
              <p>No purchases found.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
