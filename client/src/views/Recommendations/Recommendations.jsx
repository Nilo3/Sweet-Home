import { getProducts } from "../../Redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Recommendations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.products);

  const getProductCardStyle = (productId) => {
    switch (productId) {
      case "6499dceb8cd03e5c7f52faae": // Sweet® Patterned Shaggy Area Rug
        return {
          backgroundColor: "#e6e6ff",
          color: "#4b0082",
        };
      case "6499dceb8cd03e5c7f52fab4": // Sweet® Modern Floor Lamp
        return {
          backgroundColor: "#ffeb99",
          color: "#cc5200",
        };
      case "6499dceb8cd03e5c7f52fad3": // Sweet® Glass Coffee Table
        return {
          backgroundColor: "#ccffcc",
          color: "#006600",
        };
      case "6499dceb8cd03e5c7f52fabd": // Sweet® Velvet Tall Accent Chair
        return {
          backgroundColor: "#ffccff",
          color: "#800080",
        };
      case "6499dceb8cd03e5c7f52faa7": // Sweet® Velvet Accent Chair
        return {
          backgroundColor: "#f2e6ff",
          color: "#9933ff",
        };
      default:
        return {
          backgroundColor: "#f8f8f8",
          color: "#333",
        };
    }
  };

  const renderProductCard = (product) => {
    const cardStyle = getProductCardStyle(product._id);
    return (
      <div key={product._id} className="product-card" style={cardStyle}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h3 className="product-title">{`Turn on your living with ${product.name}`}</h3>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="section-title">Turn on your living with these products</h2>
      <div className="product-grid">
        {products.map((product) => {
          if (
            product._id === "6499dceb8cd03e5c7f52faae" ||
            product._id === "6499dceb8cd03e5c7f52fab4" ||
            product._id === "6499dceb8cd03e5c7f52fad3" ||
            product._id === "6499dceb8cd03e5c7f52fabd" ||
            product._id === "6499dceb8cd03e5c7f52faa7"
          ) {
            return renderProductCard(product);
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Recommendations;
