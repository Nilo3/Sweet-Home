import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, deleteFavorite } from "../../Redux/actions/actions.js";
import { useAuth } from "../../context/authContex.jsx";
import { Link } from "react-router-dom";

function Favorites() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      dispatch(getFavorites(user.uid));
    }
  }, [dispatch, user]);

  const favorites = useSelector((state) => state.favorites);

  const handleDetail = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (favoriteId) => {
    dispatch(deleteFavorite(user.uid, favoriteId));
    window.location.reload();
  };

  return (
    <div className="pt-8 flex flex-col items-center justify-center bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <div className="grid w-3/4 select-none">
        <p className="text-3xl font-medium mb-4">My Favorites</p>
        {favorites?.length === 0 ? (
          <p className="text-gray-400 flex items-center justify-center">
            No favorites have been made with this account.
          </p>
        ) : (
          favorites?.map((favorite) => (
            <div
              key={favorite?._id}
              className="text-left mt-5 mb-5 m-4 bg-white pt-5 pb-5 border border-gray-200 rounded-lg">
              <div className="border border-gray-200 rounded-lg">
                <div className="mt-5 flex mr-5 ml-5 flex-col rounded-lg bg-white sm:flex-row border-b border-gray-200 last:border-b-0">
                  <img
                    className="m-2 h-40 sm:h-40 w-40 sm:w-40 rounded-md border object-cover object-center"
                    src={favorite?.image}
                    alt=""
                  />
                  <div className="flex w-full flex-col justify-between px-4 py-4">
                    <div>
                      <div onClick={handleDetail}>
                        <Link to={`/products/${favorite?._id}`}>
                          <span className="font-semibold text-xl">
                            {favorite?.name}
                          </span>
                        </Link>
                      </div>
                      <p className="text-sm">
                        Price: ${favorite?.price}
                      </p>
                    </div>
                    <button
                      className="mt-2 py-2 px-4 bg-black text-white rounded hover:bg-zinc-800"
                      onClick={() => handleDelete(favorite?._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
