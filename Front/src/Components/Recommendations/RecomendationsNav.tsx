
import { BsFillChatSquareHeartFill } from 'react-icons/bs';

const RecomendationsNav: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
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
          <BsFillChatSquareHeartFill className="text-2xl" />
          <div className="hidden md:block">
           Recomendations
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default RecomendationsNav;