import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../Redux/actions/actions.js";
import MostValueCards from "./mostValueCards";
import "./MostValue.css";

const MostValue = () => {
  const dispatch = useDispatch();

  const allReviews = useSelector((state) => state.reviews);
  const mostValuedFirst = 0;
  const mostValuedLast = 4;
  const currentReviews = allReviews.slice(mostValuedFirst, mostValuedLast);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div>
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center">Most Valued Products</h1>
      <br />
      <div className="grid-container ml-4 flex justify-center">
        {currentReviews.map((product) => (
          <MostValueCards
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.ratingAvg}
          />
        ))}
      </div>
    </div>
  );
};

export default MostValue;
