import { useState,useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const ShoppingCart = () => {

  const allShoppingCart = useSelector((state) => state.shoppingCart);
  const [cartCount, setCartCount] = useState(allShoppingCart.length)

  useEffect(() => {
    setCartCount(allShoppingCart.length);
  }, [allShoppingCart]);

  const navigate = useNavigate();
  const navigateToshopping = () => {
    navigate("/checkout");
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 select-none">
        <div
          onClick={navigateToshopping}
          className="p-4 md:py-1 md:px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <BsCart4 className="text-3xl" />
          {cartCount > 0 && (
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
