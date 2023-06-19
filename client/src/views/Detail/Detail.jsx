import { NavLink, useParams } from "react-router-dom";
import { getProductDetail } from "../../Redux/actions/product/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.details);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between mx-auto my-auto">
      <div>
        <NavLink to={`/products/${product._id}`}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </NavLink>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-cover mx-auto"
        />
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {product.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <a
          href="#"
          className="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Detail;
