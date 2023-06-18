//? PRODUCTS WORK IN PROGRESS

// import Cards from "../../components/Card/Cards";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../Redux/actions/product/productActions";
// import Pagination from "../../components/Pagination/Pagination";

// const Products = () => {
//   const dispatch = useDispatch();
//   const allProducts = useSelector((state) => state.products.products);

//   const [currentPage, setCurrentPage] = useState(1)
//   const [cardPerPage] = useState(12)

//   const indexOfLastCard = currentPage * cardPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardPerPage;
//   const [current, setCurrent] = useState([])

//   useEffect(() => {
//     dispatch(getProducts());
//     const card = allProducts && allProducts;
//     if (card.length === 0){

//     }

//   }, [dispatch]);

//   const navigate = useNavigate();

//   const backToHome = () => {
//     navigate("/");
//   };

//   return (
//     <div>
//       <div className="allCards">
//         <Pagination />
//         {allProducts.map((product) => (
//           <div key={product._id}>
//             <Cards
//               id={product.id}
//               name={product.name}
//               price={product.price}
//               image={product.image}
//               description={product.description}
//             />
//           </div>
//         ))}
//       </div>
//       <br />
//       <button
//         type="button"
//         className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//         onClick={backToHome}
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default Products;

//? Products para mostrar produtos en /products:

import Cards from "../../components/Card/Cards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/actions/product/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {allProducts.docs?.map((product) => (
          <div key={product._id} className="flex justify-center">
            <Cards
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          </div>
        ))}
      </div>
      <br />
      <div className="text-center">
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
