import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../Redux/actions/product/productActions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null) // Referencia al campo de entrada (handleKeyDown)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(searchTerm.trim() === '') {
      alert('Please enter a valid search term') // Mostrar mensaje de alerta si el campo de búsqueda está vacío
    }else{
      dispatch(searchProducts(searchTerm))
      setSearchTerm('');
  }  
};

  const handleKeyDown = (event) => { //Apretando boton enter de teclado se aprieta el search en la pantalla
    if(event.key === "Enter"){
      handleSubmit(event)
    }
  }

  const handleButtonClick = (event) => {
    handleSubmit(event)
  }

  return (
    <div className="flex items-center">
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



