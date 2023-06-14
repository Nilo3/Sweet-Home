import React, { useState } from 'react';
import { BsShop } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ShopNow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const navigateToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2          
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <BsShop />
          <button className="hidden md:block" onClick={navigateToProducts}>
            Shop Now
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            z-10
          "
        ></div>
      )}
    </div>
  );
};

export default ShopNow;
