import { useDispatch, useSelector } from "react-redux";
import { removefromCart, addtoCart, removeOneFromCart } from "../../Redux/actions/actions";
import { getTotalPrice } from "../../utils/totalprice"
import {AiOutlineUser} from "react-icons/ai"
import {BsTelephone, BsHouse} from "react-icons/bs"
import { useNavigate } from "react-router-dom";


const Shopping = () => {
  const allShoppingCart = useSelector((state) =>  state.shoppingCart.sort((a, b) => a.name.localeCompare(b.name)))

  console.log(allShoppingCart)

  const dispatch = useDispatch();

  const handleDeleteFromCart = (productId) => {
    dispatch(removefromCart(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
  };



  const handleReduceFromCart = (product) =>{
    dispatch (removeOneFromCart(product.id))
  }

  const subTotal = getTotalPrice(allShoppingCart);

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  
  const navigateToShipping = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/checkout/shipping");
  };

  const formattedSubTotal = subTotal.toFixed(2);
  const productCounts = allShoppingCart.reduce((counts, product) => {
    if (counts[product.id]) {
      counts[product.id] += 1;
    } else {
      counts[product.id] = 1;
    }
    return counts;
  }, {});

    
    return (
      <>
       
        <div className="pt-20 flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">Checkout</a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
        <a className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold  text-blue-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg></a>
             <span className="font-semibold text-gray-900">Shop</span>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
            </ul>
           </div>
           </div>
            </div>
             <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">Check your items.</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        {allShoppingCart?.length === 0 ? (
          <p className="text-gray-400 flex items-center justify-center">Your shopping Cart is empty.</p>
        ) : (
          Object.entries(productCounts).map(([productId, count]) => {
            const product = allShoppingCart.find((prod) => prod.id === productId);
            const totalPrice = product.price * count;
            const formattedTotalPrice = totalPrice.toFixed(2)

            return (
              <div key={product.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.image} alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{product.name}</span>
                    <button className="ml-auto" onClick={() => handleDeleteFromCart(product.id)}>X</button>
                  </div>
                  <p className="text-lg font-bold">${product.price}</p>
                  <div className="flex">
                    <p className="text-sm text-gray-500 mt-3">Quantity: {count}</p>
                    <button className="mt-3 mb-5 ml-2 w-10 rounded-md bg-gray-900 px-0.5 py-.5 font-medium text-white" onClick={() => handleAddToCart(product)}>+</button>
                    <button className="mt-3 mb-5 ml-2 w-10 rounded-md bg-gray-900 px-0.5 py-.5 font-medium text-white" onClick={() => handleReduceFromCart(product)}>-</button>
                  </div>
                  <p className="text-sm text-gray-500">Total Price: ${formattedTotalPrice}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
            </div>
            

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 mr:auto h-full flex flex-col justify-between">
    <p className="text-xl font-medium">How would you like to complete your purchase?</p>
    <p className="text-gray-400 mt-2 text-m text-right">Already have an account? <a className="text-blue-600" href="#" onClick={navigateToLogin}>Login</a></p>
    <p className="text-gray-400 mt-2 text-lg">Contact</p>
    
        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div className="relative">
     <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
     <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
        </div>
        <div className=" mt-3 flex items-center mb-4">
      <input id="checkbox-2" type="checkbox" value="" className="  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want to get promotional offers</label>
       </div>
    <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Personal Info</label>
      <div className="flex">
        <div className="relative w-6/12 flex-shrink-0">
          <input type="text" id="card-no" name="card-no" className=" mr-3 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="First name" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg className="h-4 w-4 text-gray-400"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <AiOutlineUser/>
            </svg>
          </div>
        </div>
        <input type="text" name="credit-expiry" className="w-full ml-3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Last Name" />
        
      </div>
      <div className="flex flex-col">
 

  <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
  <select id="countries" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10">
    <option className="hidden">Select your country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</div>
        <div className="relative">
          <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street and house number" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
          </div>
        </div>
     

        <div className="relative">
        <input type="text" name="billing-zip" className=" mt-3 w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Appartment, suite, etc.(optional)" />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
        <svg className="mt-3 h-4 w-4 text-gray-400"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <BsHouse/>
            </svg>
            </div>
        </div>
        
        <div className="mt-3 relative flex-shrink-0 flex">
        <input type="text" name="billing-zip" className="mr-3 flex-shrink-0 rounded-md border border-gray-200 px-4 py-4 text-sm shadow-sm outline-none sm:w-1/3 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
        <input type="text" name="billing-city" className="mr-3 flex-shrink-0 rounded-md border border-gray-200 px-4 py-4 text-sm shadow-sm outline-none sm:w-1/3 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City" />
        <select id="states" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Select your state</option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
  
      <div className="relative">
          <input type="text" id="phone" name="phone" className="mt-3 w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Phone" />
          <div className="mt-3 pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg className="h-4 w-4 text-gray-400"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <BsTelephone/>
            </svg>
          </div>
        </div>

<div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${formattedSubTotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-sm text-gray-400">Calculated at next step</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${formattedSubTotal}</p>
      </div>
  

      <button onClick = {navigateToShipping} className="mt-auto mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
    Continue to payment
  </button>

    </div>
    
    </div>
        </>

        );
};

export default Shopping;