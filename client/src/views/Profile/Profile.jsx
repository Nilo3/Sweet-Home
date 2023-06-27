import { useState } from "react";
import style from "./Profile.module.css";
import { useAuth } from "../../context/authContex";
import userPlaceholder from "../../assets/image/person-placeholder-400x400.png";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  console.log(user);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedImage(null);
  };

  const handleSave = () => {
   //Aca iria toda la logica para guardar los datos en el usuario
  };

  return (
    <div className={style.all}>
      <div className={style.container}>
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
          <div className="flex flex-col border-b py-5 sm:flex-row sm:items-start">
            <div className="flex-shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Account Details</p>
              <p className="text-sm text-gray-600">Edit your profile</p>
            </div>
            <button
              onClick={handleCancel}
              className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
            >
              Save
            </button>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Name</p>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Email</p>
            <input
              placeholder="your.email@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 py-4 lg:flex-row">
            <div className="shrink-0 w-32 sm:py-4">
              <p className="mb-auto font-medium">Avatar</p>
              <p className="text-sm text-gray-600">Change your avatar</p>
            </div>
            <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
              {selectedImage ? (
                <>
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="rounded-full w-20 h-20 max-w-full max-h-full"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="mt-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
                  >
                    Remove Image
                  </button>
                </>
              ) : (
                <>
                  {user && user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User Profile"
                      className="rounded-full w-30 h-30 max-w-full"
                    />
                  ) : (
                    <img
                      src={userPlaceholder}
                      alt="User Placeholder"
                      className="rounded-full w-20 h-20 max-w-full"
                    />
                  )}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="max-w-full mt-6 rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex justify-end py-4 sm:hidden">
            <Link to="/home">
              <button
                onClick={handleCancel}
                className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
              >
                Cancel
              </button>
            </Link>
            <button
              onClick={handleSave}
              className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
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
};

export default Profile;
