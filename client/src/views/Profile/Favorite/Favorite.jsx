import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addtoFavorites, removefromFavorites, getFavorites, postFavorites} from "../../../Redux/actions/actions.js";
import Pagination from "../../../components/Pagination/Pagination.jsx";

function Favorite() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites);

  const [currentPage, setCurrentPage] = useState(1);
  const favoriteProductsPerPage = 8;

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

  const indexOfLastProduct = currentPage * favoriteProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - favoriteProductsPerPage;
  const favoriteProductsToDisplay = favoriteProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="flex flex-col items-center bg-white">
        <h1 className="mt-10 text-4xl font-bold text-gray-800">My Favorites</h1>
        <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
          {favoriteProductsToDisplay.length > 0 ? (
            favoriteProductsToDisplay.map((product) => (
              <article
                key={product._id}
                className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
              >
                <Link to={`/products/${product._id}`}>
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-center">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="p-4 flex justify-center">
                  <button
                    onClick={() => handleRemoveFavorite(product._id)}
                    className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md"
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

        {favoriteProductsToDisplay.length > 0 && (
          <Pagination
            productPerPage={favoriteProductsPerPage}
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            totalProducts={favoriteProducts.length}
          />
        )}
      </section>
    </div>
  );
}

export default Favorite;
