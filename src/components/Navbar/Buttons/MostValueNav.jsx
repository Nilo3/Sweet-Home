import { BsAwardFill } from 'react-icons/bs';

const MostValuedNav = () => {

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
          <BsAwardFill className="text-2xl" />
          <div className="hidden md:block">
           Most Valued
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default MostValuedNav;