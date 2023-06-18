
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../Redux/actions/product/productActions";
import MostValueCards from "./MostValueCards";

export default function MostValue() {
      const dispatch = useDispatch();
    
    const allReviews = useSelector((state) =>state.reviews)
    const mostValuedfirst= 0
    const mostValuedlast=4
    const currentReviews = allReviews.slice(mostValuedfirst,mostValuedlast)




  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

    return (
      <div>
        <br/>
        <h1 className="text-4xl font-bold text-center">Most Valued Products</h1>
        <br />
        <div className="grid grid-cols-4 gap-2 justify-items-center">
          {currentReviews.map((product) => (
            <div key={product._id} >
            <MostValueCards
              id={product.product}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.ratingAvg}
            />
            </div>
          ))}
        </div>
     </div>
    )
  }


