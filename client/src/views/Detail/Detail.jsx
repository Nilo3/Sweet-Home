import { useParams } from "react-router-dom";
import { getProductDetail, addtoCart, postShoppingCart } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContex";
import axios from "axios";

const Detail = () => {
  const dispatch = useDispatch();
  const allShoppingCart = useSelector((state) => state.shoppingCart);
  const product = useSelector((state) => state.details);
  const { id } = useParams();

  const [cartId, setCartId] = useState(null);
  // este es el id del producto

  const isProductInCart = allShoppingCart.some((product) => product._id === id);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const handleShoppingCart = () => {
    dispatch(addtoCart(product));
  };

  const backToHome = () => {
    navigate("/");
  };

  const { user } = useAuth();

  useEffect(() => {
    if (user && user.email) {
      checkUserIdInDatabase(user.email);
    }
  }, [user]);

  const checkUserIdInDatabase = async (userEmail) => {
    try {
      const response = await axios(`http://localhost:3001/api/users/v1/${userEmail}`);

      if (response && response.data.cart) {
        setCartId(response.data._id);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cartId) {
      const updatedCart = {
        user: cartId,
        products: [
          {
            product: id,
            quantity: 1,
          },
        ],
      };

      dispatch(postShoppingCart(updatedCart));
    } else {
      const newCart = {
        user: user._id,
        products: [
          {
            product: id,
            quantity: 1,
          },
        ],
      };

      dispatch(postShoppingCart(newCart));
    }
  };

  function handleClick(event) {
    handleSubmit(event);
    handleShoppingCart();
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  Home
                </a>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Products
                  </a>
                </div>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  {/* <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                            Details
                          </a> */}
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>

            <div className="flex items-center">
              <span className="text-2xl text-gray-900 font-bold">${product.price}</span>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleClick}>
                {!isProductInCart && (
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Add to Cart
                  </button>
                )}

                {isProductInCart && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 cursor-not-allowed"
                  >
                    In Cart
                  </button>
                )}
              </form>
            </div>

            <div className="mt-4">
              <button
                onClick={backToHome}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;