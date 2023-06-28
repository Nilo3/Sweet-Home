import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineReviews } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../context/authContex";
import { useEffect } from "react";
import { getUserByUid } from "../../Redux/actions/actions";
import { useState } from "react";


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
  return (
    <div className="flex">
    <aside
    id="cta-button-sidebar"
    className="relative left-0 z-45 w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
      <div className="ml-3 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 w-full">
        <ul className="space-y-2 font-medium">
          <li>
          <a
  href="#"
  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
    selectedSection === "profile" ? " border-gray-100 bg-gray-400 dark:bg-gray-900" : ""
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
    selectedSection === "purchases" ? " border-gray-100 bg-gray-400 dark:bg-gray-900" : ""
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
    selectedSection === "reviews" ? " border-gray-100 bg-gray-400 dark:bg-gray-900" : ""
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
        <div className="pt-20 flex flex-col items-center border-b  bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        </div>
      )}

{selectedSection === "purchases" && (
  
  <div className="pt-20 flex flex-col items-center justify-center bg-gray-200 w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
   
    <div className="grid  w-1/2 ">
    <p className="text-xl font-medium">Purchases</p>
      
      

        
        {userOrders.map((order) => (
           <div key={order._id} className=" text-left mt-5 mb-5 m-4">
            <div className=" bg-white  rounded-lg pt-5 pb-5">
            <div className="border-b-2 border-gray-200">
            <cite className="ml-3 font-bold text-sm block mb-5">
                  {new Date(order.paidAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </cite>
                  </div>
            {order.products?.map((product) => (
                   
              <div
                className=" mt-3 flex mr-5 ml-5 flex-col rounded-lg bg-white sm:flex-row  border border-gray-200"
                key={product.product._id}
              >
                
                
                <img
                  className="m-2 h-24 sm:h-24 w-36 sm:w-52 rounded-md border object-cover object-center"
                  src={product.product.image}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                <p className="text-sm text-green-500">Delivered</p>
                  <span className="font-semibold">{product.product.name}</span>
                  <p className="text-sm">Price: ${product.product.price}</p>
                  <p className="text-xs ">Quantity: {product.quantity}</p>
                    </div>
                
                  </div>
                  
                ))}
                   <p className="text-sm font-semibold mt-5 text-right mr-3">Total Price: ${order.totalPrice.toFixed(2)}</p>
              </div>
              
              </div>
            ))}
          </div>
       
        </div>
      )}

      {selectedSection === "reviews" && (
        <div className="pt-20 flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        
        </div>
      )}

      {/* Other sections */}
    </div>

);
};

export default User;
