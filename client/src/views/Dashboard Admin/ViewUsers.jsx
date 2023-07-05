import Usercard from "./Usercard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/actions/actions";
import { Link, useParams } from "react-router-dom";

const ViewUsers = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <table className="pt-8 flex flex-col items-center justify-center bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <thead></thead>
        <tbody className="text-left mt-5 mb-5 m-4 bg-white pt-5 pb-5 border border-gray-200 rounded-lg">
          <div>
            <a className="mr-20 px-4 py-4 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              Name
            </a>
            <a className="mx-28 px-4 py-4 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              Email
            </a>

            <a className="ml-44 px-4 py-4 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              Status
            </a>
          </div>
          {user?.map((user) => (
            <Usercard
              key={user._id}
              id={user._id}
              name={user.name}
              image={user.image}
              email={user.email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
