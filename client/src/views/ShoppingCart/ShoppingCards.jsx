import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCards = ({ id, name, image, price }) => {
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={image} alt="" />
            <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{name}</span>
          <p className="text-lg font-bold">{price}</p>
         </div>
         </div>
         
}

export default ShoppingCards