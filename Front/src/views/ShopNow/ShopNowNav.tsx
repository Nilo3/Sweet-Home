import { BsShop } from 'react-icons/bs';

const ShopNowNav: React.FC = () => {

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
          <BsShop className="text-2xl"  />
          <div className="hidden md:block">
           Shop Now
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNowNav;