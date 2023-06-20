import { useState } from "react"
import { useAuth } from "../../context/authContex";
import {useNavigate, Link} from 'react-router-dom'
import {Alert} from './Alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export function Register () {

  const [user, setUser] = useState({
  email:'',
  password:'',
  confirmPassword: '',
});

const navigate = useNavigate()
const [error, setError] = useState();
const {singup, registerWithGoogle, registerWithGitHub} = useAuth ()

const handleChange = ({ target: { name, value } }) => {
  setUser({ ...user, [name]: value });
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = async (event) => {
  event.preventDefault();
  setError('');

  if (user.password !== user.confirmPassword) {
    setError('Las contraseñas no coinciden');
    return;
  }

  try {
    await singup(user.email, user.password);
    toast.success('Successful registration');
    navigate('/');
  } catch (error) {
    if (error.code === 'auth/weak-password')
      setError('Invalid password. Please enter your password again');

    if (error.code === 'auth/internal.error')
      setError('Invalid Email. Please enter your email again');

    if (error.code === 'auth/email-already-in-use')
      setError('This email is already in use');

    if (user.password.length < 8)
      setError(
        'Invalid Form, Password must contain greater than or equal to 8 characters.'
      );

    if (error.code === 'auth/account-exists-with-different-credential')
      setError(
        'Sorry, your account already exists with a different credential (GitHub or Google). Try again'
      );

    if (!user.email) setError('Please enter your email');

    if (!user.password) setError('Please enter your password');

    if (!emailRegex.test(user.email))
      setError('Please enter a valid email address');

    setTimeout(() => {
      setError('');
    }, 5000);
  }
};



const handleGoogleSignIn = async () => {
  try{
  await registerWithGoogle()
  toast.success('WELCOME TO SWEET HOME');
  navigate('/')
  } catch(error){
    setError(error.message);
  }
};

const handleGitHubSignIn = async () => {
  try{ 
  await registerWithGitHub()
  toast.success('WELCOME TO SWEET HOME');
  navigate('/')
} catch(error){
  setError(error.message);
}
};

const backToHome = () => {
  navigate("/");
};

  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error}/>}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-4 pb-2 mb-2">
        <h1 className="font-bold text-lg text-center mb-4">Registration Form</h1>
        <div className="mb-4">
            <label htmlFor="name"className="block text-gray-700 text-sm font-bold mb-2"> Name </label>
            <input 
                type="name" 
                name="name" 
                placeholder="Please, enter you name" 
                className="shadow appearance-none border rounded text-xs w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName"className="block text-gray-700 text-sm font-bold mb-2"> Last Name </label>
            <input 
                type="lastName" 
                name="lastName" 
                placeholder="Please, enter you email" 
                className="shadow appearance-none border text-xs rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="email"className="block text-gray-700 text-sm font-bold mb-2"> Email </label>
            <input 
                type="email" 
                name="email" 
                placeholder="Please, enter you email" 
                className="shadow appearance-none border rounded text-xs w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="shadow appearance-none border rounded text-xs w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
          <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              className="shadow appearance-none border rounded text-xs w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center">
              Register
              </button>
              <p className="my-4 text-xs flex justify-between font-bold px-3">
              Alredy have an Account? 
              <Link className="text-blue-500 text-xs" to='/login'>Login</Link>
              </p>
          </form>
        
        <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full flex items-center mb-2">
              <FcGoogle size={25} />
              <span className="ml-2 text-sm" style={{ margin: '0 auto' }}>Register with Google</span>
            </button>
            <button onClick={handleGitHubSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full flex items-center">
            <FaGithub size={25} />
            <span className="ml-2 text-sm" style={{ margin: '0 auto' }}>Register with GitHub</span>
           </button>
          </div>

        <div className="text-center">
        <button
          type="button"
          className="text-gray-900 hover:text-white text-xs border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center  mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={backToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Register
