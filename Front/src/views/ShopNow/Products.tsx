import React from "react";
import Cards from "../Cards/Cards";

const Products: React.FC = () => {
  return (
    <div >
      {[...Array(10)].map((_, index) => (
        <Cards key={index}/>
      ))}
    </div>
  );
};

export default Products;