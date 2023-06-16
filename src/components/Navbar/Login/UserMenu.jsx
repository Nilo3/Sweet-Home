import React, { useState } from 'react';
import { BiLogInCircle } from 'react-icons/bi';

import LoginModal from './Auth/LoginModal';

const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleModal}
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
          <BiLogInCircle className="text-2xl" />
          <div className="hidden md:block">Login</div>
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={toggleModal} />}
    </div>
  );
};

export default UserMenu;