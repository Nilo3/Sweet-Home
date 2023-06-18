import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function RegisterNav() {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate("/register");
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="p-4md:py-1md:px-2 border-[1px] flexflex-rowitems-centergap-3rounded-fullcursor-pointerhover:shadow-mdtransitionbg-white">
          <BiLogInCircle />
          <button className="hidden md:block" onClick={navigateToProducts}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterNav;
