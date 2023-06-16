import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginModal from './LoginModal';

const SignUpForm = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLoginLinkClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  // Estilos personalizados para el overlay del modal
  const modalOverlayStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información a la base de datos
    console.log('Sign up form submitted!');
  };

  return (
    <div className="container mx-auto max-w-sm p-4">
      <h2 className="text-2xl font-bold mb-4">Sign up</h2>
      <form onSubmit={handleSignUp}>
        {/* Campos de formulario */}
        <div className="my-4">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Sign up
        </button>
      </form>
      <p className="text-sm mt-2">
        Already have an account?{' '}
        <a href="#" onClick={handleLoginLinkClick} className="text-blue-500">
          Login
        </a>
        </p>
<Modal
  isOpen={isLoginModalOpen}
  onRequestClose={handleCloseModal}
  contentLabel="Login Modal"
  style={modalOverlayStyles} 
>
  <LoginModal onClose={handleCloseModal} />
  <div className="text-center">
    <button className="text-red-700 mt-2" onClick={handleCloseModal}>
      Close
    </button>
  </div>
</Modal>

</div>
);
};










 


export default SignUpForm;



