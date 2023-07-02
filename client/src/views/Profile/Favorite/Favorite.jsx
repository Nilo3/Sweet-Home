import React, { useEffect } from "react";
import { getFavoriteProducts } from "../../../Redux/actions/actions.js"
import { useDispatch, useSelector } from "react-redux";

function Favorite() {
    const dispatch = useDispatch();
    const favoriteProducts = useSelector((state) => state.favorites);

    useEffect(() => {
        dispatch(getFavoriteProducts())
          .catch((error) => {
            console.log(error);
          });
      }, [dispatch]);

  const handleRemoveFavorite = (productId) => {
     dispatch(removeFavorite(productId))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Favorite Products</h1>
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h2>{product.price}</h2>
            <h3>{product.category.map((el) => el.name)}</h3>
            <button onClick={() => handleRemoveFavorite(product.id)}>
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
