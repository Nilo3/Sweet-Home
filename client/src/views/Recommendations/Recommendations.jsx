import { getProducts } from "../../Redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Recommendations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.products);
  const recommendedProductIds = [
    "64a269277e82207ed2400e0a",
    "64a269277e82207ed2400e0e",
    "64a269277e82207ed2400e01",
    "64a269277e82207ed2400dfd",
    "64a269277e82207ed2400dfc",
    "64a269277e82207ed2400de1",
    "64a269277e82207ed2400e18",
    "64a269277e82207ed2400e1d",
    "64a269277e82207ed2400dd6",
  ];
  const recommendedProducts = products.filter((product) =>
    recommendedProductIds.includes(product._id)
  );

  return (
    <div className="select-none">
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Our Recommendations
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Discover our hand-picked selection of products that we think you
              will love.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {recommendedProducts.map((product) => (
              <li key={product._id}>
                <a className="relative block group">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded object-cover w-full transition duration-500 aspect-square group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3
                      className="text-xl font-medium text-white"
                      style={{ textShadow: "1px 1px 2px #000000" }}
                    >
                      {product.name}
                    </h3>

                    <Link to={`/products/${product._id}`}>
                      <span className="rounded mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                        View Detail
                      </span>
                    </Link>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
