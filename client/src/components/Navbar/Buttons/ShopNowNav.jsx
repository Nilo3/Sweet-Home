import { BsShop } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ShopNow() {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <BsShop />
          <button className="hidden md:block" onClick={navigateToProducts}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
