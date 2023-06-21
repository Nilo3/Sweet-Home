import { addtoCart, removefromCart } from "../../Redux/actions/product/productActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ id, name, image, price, category, showAddToCartButton }) => {
  const dispatch = useDispatch();
  const allShoppingCart = useSelector((state) => state.shoppingCart);
  const [inCart, setInCart] = useState(false);

  

  useEffect(() => {
    dispatch(removefromCart(id)); 
  }, [dispatch, id]);

  useEffect(() => {
    allShoppingCart.forEach((prod) => {
       if (prod.id === id) {
          setInCart(true);
       }
    });
 }, [allShoppingCart, id]);

 const handleShoppingCart = () => {
  if (inCart) {
    setInCart(false);
    dispatch(removefromCart(id)); 
  } else {
    setInCart(true);
    dispatch(addtoCart({ id, name, image, price })); 
  }
};

  return (
    <div>
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-w-3 aspect-h-4 mb-4">
        <Link to={`/products/${id}`}>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              className="object-cover object-center w-full h-full"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <Link to={`/products/${id}`}>
            <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">{category}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          {showAddToCartButton && (
            <button
              onClick={handleShoppingCart}
              href="#"
              className="text-white bg-black hover:bg-neutral-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer select-none text-center"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;