import React, { useState } from 'react';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';

const Recomendations: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
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
          <BsFillChatSquareHeartFill />
          <div className="hidden md:block">
           Recomendations
            
          </div>
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
        >
       
        </div>
      )}
    </div>
  );
};


export default Recomendations;