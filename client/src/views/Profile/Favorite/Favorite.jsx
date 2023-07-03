import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addtoFavorites,
  removefromFavorites,
  getFavorites,
  postFavorites,
} from "../../../Redux/actions/actions.js";

function Favorite() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = (productId) => {
    dispatch(removefromFavorites(productId)).catch((error) => {
      console.log(error);
    });
  };

  const handleAddFavorite = (product) => {
    const payload = {
      user: user.uid,
      products: [product],
    };

    dispatch(addtoFavorites(product));
    dispatch(postFavorites(payload))
      .then(() => {
        console.log("Favorito guardado en el servidor");
      })
      .catch((error) => {
        console.log("Error al guardar el favorito en el servidor:", error);
      });
  };

  const backToHome = () => {
    navigate("/");
  };
  return (
<div>
  <section className="flex flex-col items-center bg-white">
    <h1 className="mt-10 text-4xl font-bold text-gray-800">My Favorites</h1>
    <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <article
            key={product._id}
            className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className ="w-full h-[300px] object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-center">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
             
              <button
                onClick={() => handleRemoveFavorite(product._id)}
                className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md self-center"
              >
                Remove from Favorites
              </button>
            </div>
          </article>
        ))
      ) : (
        <p>No favorite products found.</p>
      )}
    </div>
  </section>
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

export default Favorite;
