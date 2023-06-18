import { useState } from "react"
import { useAuth } from "../../context/authContex";
import {useNavigate, Link} from 'react-router-dom'
import {Alert} from './Alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register () {

  const [user, setUser] = useState({
  email:'',
  password:'',
});
const {singup} = useAuth ()
const navigate = useNavigate()
const [error, setError] = useState();

const handleChange = ({target: {name, value}})  => {
  setUser ({...user,[name]: value})
}

const handleSubmit = async (event) => {
  event.preventDefault ()
  setError('')
  try{
    await singup(user.email, user.password)
    toast.success('Successful registration');
    navigate('/')
  }catch (error){
    if (error.code === "auth/weak-password")
      setError("Invalid password. Please enter your password again")

    if (error.code === "auth/internal.error")
      setError("Invalid Email. Please enter your email again")

    if(error.code === "auth/email-already-in-use")
      setError("This email is already in use")
      toast.error(error.message);
      
      setTimeout(() => {
      setError('');
    }, 5000); 
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
            <label htmlFor="email"className="block text-gray-700 text-sm font-bold mb-2"> Email </label>
            <input 
                type="email" 
                name="email" 
                placeholder="Please, enter you email" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2"> Password </label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="********"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
          </div>    
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center">
              Register
              </button>
              <p className="my-4 text-sm flex justify-between px-3">
              Alredy have an Account? 
              <Link to='/login'>Login</Link>
          </p>
        </form>
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

export default Register
