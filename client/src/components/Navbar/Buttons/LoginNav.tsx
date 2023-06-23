import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";

function LoginNav() {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate("/login");
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 select-none">
        <div className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition bg-white">
          <BiLogInCircle />
          <button className="hidden md:block" onClick={navigateToProducts}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginNav;
