import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from './Avatar';
import MenuItem from './MenuItem';

const UserMenu: React.FC = () => {
  const avatarSrc = 'https://pic.onlinewebfonts.com/svg/img_569204.png';
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
            md:px-6
            border-[1px]
            border-neutral-200
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
          <AiOutlineMenu size={18}/>
          <div className="hidden md:block">
            <Avatar src={avatarSrc} />
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
           
          "
        >
          <div className="flex flex-col">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={() => {}} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
