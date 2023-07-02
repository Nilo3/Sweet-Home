import React, { useEffect } from "react";
import { addtoFavorites, removefromFavorites, getFavorites, postFavorites } from "../../../Redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";

function Favorite() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = (productId) => {
    dispatch(removefromFavorites(productId))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddFavorite = (product) => { //manejador que hace que el producto tambien se guarde en el servidor
    dispatch(addtoFavorites(product));
    dispatch(postFavorites(product))
      .then(() => {
        console.log('Favorito guardado en el servidor');
      })
      .catch((error) => {
        console.log('Error al guardar el favorito en el servidor:', error);
      });
  };

  return (
    <div>
      <h1>Favorite Products</h1>
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h3>{product.category}</h3>
            <button onClick={() => handleRemoveFavorite(product._id)}>
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorite products found.</p>
      )}
    </div>
  );
}

export default Favorite;


