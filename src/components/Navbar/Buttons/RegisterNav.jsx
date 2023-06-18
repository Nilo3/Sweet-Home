import React, { useState } from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';



function RegisterNav () {

  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/register');
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 select-none">
        <div
            className="
            p-4
            md:py-1
            md:px-2     
            border-[1px]     
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            bg-white
          "
        >
          <BiLogInCircle />
          <button className="hidden md:block" onClick={navigateToProducts}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterNav;