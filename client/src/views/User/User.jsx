import { HiOutlineShoppingBag } from "react-icons/hi"
import{ MdOutlineReviews } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import { useSelector } from "react-redux"
import { Cards } from "../../components/Card/Cards"

const User = () => {
   // const {user } = useAuth()
   const order = useSelector(state => state.orders)

   // {order.length > 0 ? (
   //    order.map((product) => (
   //      <div key={product._id} className="flex justify-center">
   //        <Cards
   //          id={product._id}
   //          name={product.name}
   //          price={product.price}
   //          image={product.image}
   //          category={product.category.map((el) => el.name)}
   //        />
   //      </div>
   //    ))
   

    return(
        <>

<aside id="cta-button-sidebar" className="relative top-14 left-0 z-45 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className=" ml-3 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="mt-2 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><BiUserCircle/></svg>
               <span className="ml-3 text-m">Profile</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="mt-1 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><HiOutlineShoppingBag/></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Purchases</span>
               
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="mt-2 ml-2 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><MdOutlineReviews/></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
              
            </a>
         </li>
        
      </ul>

   </div>
</aside>
        </>   )
}

export default User