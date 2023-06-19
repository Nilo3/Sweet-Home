//? Products para mostrar produtos en /products:

import Cards from "../../components/Card/Cards";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice, getProducts } from "../../Redux/actions/product/productActions";
import { filterByName } from "../../Redux/actions/product/productActions";

import SearchBar from "./searchBar";


const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const [setProducts] = useState([]);



  const [productPerPage, setProductsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  

  useEffect(() => {
    dispatch(getProducts());
    
    console.log(allProducts)
    
  }, [dispatch]);

  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };


  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const products = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  function handleOrderName (event) {
    event.preventDefault();
    dispatch(filterByName(event.target.value));
    setCurrentPage(1);
    // setProducts(
    //   products
    // )
   }
  
  function handleOrderPrice (event) {
    event.preventDefault()
    dispatch(filterByPrice(event.target.value))
    setCurrentPage(1)
  }
  
  
  
  
  return (
    <div>
      
        {/* <SearchBar /> */}
      
      <div className="flex justify-center h-16 items-center">

      <select onChange={(event) => handleOrderName(event)}>
                    <option>Order by Name</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <select onChange={(event) => handleOrderPrice(event)}>
                   <option>Price</option>
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                </select>
      <div className="flex justify-center">
        <Pagination
          productPerPage={productPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={allProducts.length}
        />
      </div>
       </div> 
      <div className="grid grid-cols-3 gap-4">
        {
        products.length > 0
        ? products.map(
          (
            product //? Cambio debido a que la respuesta desde el back ahora son todos los productos
          ) => (
            <div key={product._id} className="flex justify-center">
              <Cards
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            </div>
          )
        ): undefined}
      </div>
      <br />
      <div className="flex justify-center">
        <Pagination
          productPerPage={productPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={allProducts.length}
        />
      </div>
      <div className="text-center mt-6">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto block"
          onClick={backToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Products;
