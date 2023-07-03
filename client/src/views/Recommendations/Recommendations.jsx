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
    "6499dceb8cd03e5c7f52faae",
    "6499dceb8cd03e5c7f52fab4",
    "6499dceb8cd03e5c7f52fad3",
    "6499dceb8cd03e5c7f52fabd",
    "6499dceb8cd03e5c7f52faa7",
    "6499dceb8cd03e5c7f52fab8",
  ];
  const recommendedProducts = products.filter((product) =>
    recommendedProductIds.includes(product._id)
  );

  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Our Recommendations
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Discover our hand-picked selection of products that we think you will love.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {recommendedProducts.map((product) => (
              <li key={product._id}>
                <a href="#" className="relative block group">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
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
