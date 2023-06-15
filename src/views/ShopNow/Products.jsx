import React from "react";
import Cards from "../../components/Cards/Cards";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const backToHome= () =>{
    navigate('/');
  }

  return (
    <div >
      {[...Array(10)].map((_, index) => (
        <Cards key={index}/>
      ))}
    <br />
    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={backToHome}>Back to Home</button>
    </div>
  );
};

export default Products;