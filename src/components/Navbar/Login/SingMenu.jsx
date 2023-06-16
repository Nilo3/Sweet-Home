import React, { useState } from 'react';
import { CgUserlane } from 'react-icons/cg';
import Modal from 'react-modal';

import SignUpForm from './Auth/SignUpForm';

const SingMenu = () => {
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
          <CgUserlane className="text-2xl" />
          <div className="hidden md:block">Sign Up</div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Sign Up Modal"
      >
        <SignUpForm onClose={toggleModal} />
      </Modal>
    </div>
  );
};

export default SingMenu;
