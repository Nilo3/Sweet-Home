import Cards from "../../components/Card/Cards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/actions/product/productActions";
import { NavLink } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="allCards">
        {allProducts.docs?.map((product) => (
          <div key={product.id}>
            <NavLink to={"/products/" + product.id}>
              <Cards
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            </NavLink>
          </div>
        ))}
      </div>
      <br />
      <button
        type="button"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={backToHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Products;
