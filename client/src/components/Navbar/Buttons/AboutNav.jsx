import { AiOutlineTeam } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AboutNav = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineTeam className="text-2xl" />
          <div className="hidden md:block">
            <button className="hidden md:block" onClick={navigateToAbout}>
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
