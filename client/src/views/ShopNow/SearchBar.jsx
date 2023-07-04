import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../Redux/actions/actions";
import { toast } from "react-toastify";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const products = useSelector((state) => state.products); // Asegúrate de obtener el estado de los productos desde tu Redux store

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar el dispatch siempre
    dispatch(searchProducts(searchTerm));

    // Filtrar los productos después del dispatch
    const matchingProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleButtonClick = (event) => {
    handleSubmit(event);
  };

  return (
    <div className="flex items-center select-none self-center">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        ref={inputRef}
      />
      <button
        className="text-gray-900 cursor-pointer select-none bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2 mr-4 ml-2"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
