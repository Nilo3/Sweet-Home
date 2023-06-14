import React, { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, githubProvider, facebookProvider } from '../firebase';
import { FaGithub } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {ImFacebook2} from 'react-icons/Im';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleEmailSignIn = () => {
    if (email.trim() === '' || password === '') {
      setError('Please enter email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        onClose();
      })
      .catch(error => {
        setError('Invalid email or password.');
        console.error('Error:', error);
      });
  };

  return (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <div className="my-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button onClick={handleEmailSignIn} className="bg-slate-400 text-white px-4 py-2 rounded-lg mb-4 w-full">
          Login
        </button>
        <div className="flex justify-between items-center">
  <div className="flex flex-col items-center">
    <button onClick={handleGoogleSignIn} className="bg-white text-gray-500 px-2 py-2 rounded-full mb-2">
      <FcGoogle size={20} />
    </button>
    <span className="text-sm">Google</span>
  </div>
  <div className="flex flex-col items-center">
    <button onClick={handleFacebookSignIn} className="bg-white text-blue-500 px-2 py-2 rounded-full mb-2">
      <ImFacebook2 size={20} />
    </button>
    <span className="text-sm">Facebook</span>
  </div>
  <div className="flex flex-col items-center">
    <button onClick={handleGithubSignIn} className="bg-white text-black-500 px-2 py-2 rounded-full">
      <FaGithub size={20} />
    </button>
    <span className="text-sm">GitHub</span>
  </div>
</div>
<br/>
<button onClick={onClose} className="text-red-700 mt-2 block mx-auto">
  Close
</button>

      </div>
    </div>
  );
};

export default LoginModal;




