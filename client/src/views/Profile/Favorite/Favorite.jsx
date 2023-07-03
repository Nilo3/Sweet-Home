import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoFavorites, removefromFavorites, getFavorites, postFavorites } from "../../../Redux/actions/actions.js";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import { useAuth } from "../../../context/authContex.jsx";

function Favorite() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites);
  const { user } = useAuth();
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
        console.log("Favorite saved on the server");
      })
      .catch((error) => {
        console.log("Error saving the favorite on the server:", error);
      });
  };

  const indexOfLastProduct = currentPage * favoriteProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - favoriteProductsPerPage;
  const favoriteProductsToDisplay = favoriteProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pt-8 flex flex-col items-center justify-center bg-white w-full py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <div className="grid w-3/4 select-none">
        <p className="text-3xl font-medium mb-4">My favorites</p>
        <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
          {favoriteProductsToDisplay?.length > 0 ? (
            favoriteProductsToDisplay?.map((product) => (
              <article className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
                  <div>
                  <Link key={product?._id} to={`/products/${product?._id}`}>
                    <img
                      src={product?.image}
                      alt={product?.name}
                      className="w-full h-[300px] object-cover"
                    />
                    </Link>
                  </div>

                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-center overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {product?.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product?.category}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemoveFavorite(product?._id)}
                      className="mt-2 px-4 py-2 bg-black text-white rounded-md self-center"
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

        {favoriteProductsToDisplay?.length > 0 && (
          <Pagination
            productPerPage={favoriteProductsPerPage}
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            totalProducts={favoriteProducts?.length}
          />
        )}
      </div>
    </div>
  );
}

export default Favorite;
