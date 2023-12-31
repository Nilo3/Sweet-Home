import { useState } from "react";
import { useAuth } from "../../context/authContex";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await login(user.email, user.password);
      toast.success("Welcome to Sweet Home");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") setError("User not Found");
      if (error.code === "auth/popup-closed-by-user") setError("The popup has been closed by the user before finalizing the operation");
      if (error.code === "auth/weak-password")
        setError("Invalid password. Please enter your password again");
      if (error.code === "auth/account-exists-with-different-credential")
        setError("Sorry, your account already exists with a different credential (GitHub or Google). Try again");
      if (!user.email) setError("Please enter your email");
      if (!user.password) setError("Please enter your password");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      toast.success(`Welcome back`);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("We sent you an email with a link to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error} />}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="font-bold text-xl text-center mb-4">Login Form</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Please, enter you email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="items-center justify-between">
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
            disabled={!!error}
            >
              Login
            </button>
            <a
              href="#!"
              className="inline-block align-center font-bold text-sm mt-4 text-gray-900 hover:text-blue-800 "
              onClick={handleResetPassword}
            >
              Forgot password?
            </a>
          </div>
          <p className="my-4 text-sm flex justify-between font-bold px-3">
            Dont have an account?
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </p>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full flex items-center mb-4"
        >
          <FcGoogle size={25} />
          <span className="ml-2" style={{ margin: "0 auto" }}>
            Login with Google
          </span>
        </button>
      </div>
      <div className="text-center mt-6">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={backToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;
