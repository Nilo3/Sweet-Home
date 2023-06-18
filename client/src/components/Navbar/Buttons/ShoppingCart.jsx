import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

const ShoppingCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={addToCart}
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
