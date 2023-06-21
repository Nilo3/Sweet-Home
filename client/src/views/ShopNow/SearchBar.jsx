import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../Redux/actions/product/productActions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
    console.log(searchTerm)
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
