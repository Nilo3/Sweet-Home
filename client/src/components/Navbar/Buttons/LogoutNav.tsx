import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useAuth } from "../../../context/authContex";

function LogoutNav() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 select-none">
        <div className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition bg-white">
          <BiLogOutCircle onClick={navigateToHome} className="text-2xl" />
          <button className="hidden md:block" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutNav;
