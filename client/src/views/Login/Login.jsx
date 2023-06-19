import { useState } from "react"
import { useAuth } from "../../context/authContex";
import {Link, useNavigate} from 'react-router-dom'
import {Alert} from './Alert'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Login () {

const [user, setUser] = useState({
  email:'',
  password:'',
});
const {login, loginWithGoogle, loginWithGitHub, resetPassword} = useAuth ()
const navigate = useNavigate()
const [error, setError] = useState();

const handleChange = ({target: {name, value}})  => {
  setUser ({...user,[name]: value})
}

const handleSubmit = async (event) => {
  event.preventDefault();
  setError('');

  try {
    await login(user.email, user.password);
    toast.success('Logged in');
    navigate('/');
  } catch (error) {
    if (error.code === "auth/user-not-found")
      setError("User not Found");
     
      if (error.code === "auth/weak-password")
      setError("Invalid password. Please enter your password again")
    toast.error("Invalid password. Please enter your password again");
    
    setTimeout(() => {
      setError('');
    }, 5000); 
  }
};


const handleGoogleSignIn = async () => {
  try{
  await loginWithGoogle()
  navigate('/')
  } catch(error){
    setError(error.message);
  }
};

const handleGitHubSignIn = async () => {
  try{ 
  await loginWithGitHub()
  navigate('/')
} catch(error){
  setError(error.message);
}
};

const handleResetPassword = async () => {
  if (!user.email)return setError('Please enter your email')
try{
  await resetPassword (user.email);
  setError('We sent you an email with a link to reset your password')
} catch(error){
  setError(error.message);
}
}
const backToHome = () => {
  navigate("/");
};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error}/>}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"> Email </label>
          <input 
              type="email" 
              name="email" 
              placeholder="Please, enter you email" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
          />
          </div>
          <div className="mb-4">
          <label htmlFor="password"className="block text-gray-700 text-sm font-bold mb-2"> Password </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
          </div> 
            <div className="flex items-center justify-between">  
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center">
              Login
              </button>
              <a href="#!"className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
                onClick={handleResetPassword}
                >
                Forgot Password?
                </a>
            </div>
        </form>    
           <p className="my-4 text-sm flex justify-between px-3">
              Don't have an Account? 
              <Link to='/register'>Register</Link>
          </p>
            <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full flex items-center mb-4">
              <FcGoogle size={25} />
              <span className="ml-2" style={{ margin: '0 auto' }}>Login with Google</span>
            </button>
            <button onClick={handleGitHubSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full flex items-center">
            <FaGithub size={25} />
            <span className="ml-2" style={{ margin: '0 auto' }}>Login with GitHub</span>
           </button>
          </div>
          <button
        type="button"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={backToHome}
      >
        Back to Home
      </button>
    </div>
  )
}

export default Login
