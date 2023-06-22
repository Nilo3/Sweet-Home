import { BsFillChatSquareHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const RecomendationsNav = () => {
  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate("/");
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 select-none">
        <div className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <BsFillChatSquareHeartFill className="text-2xl" />
          <a className="hidden md:block" onClick={navigateToProducts}>
            Recommendations
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecomendationsNav;
