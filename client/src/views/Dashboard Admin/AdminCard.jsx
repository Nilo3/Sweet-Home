import { useEffect } from "react";
import { deleteProduct, getCategory, getProducts, softDeleteProduct } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UploadProduct from "../UploadProduct/UploadProduct";


const AdminCard = ({ id, name, price,description, image, category }) => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts)
    dispatch(getCategory)
  }, [dispatch])

    function handleDelete(event) {
      event.preventDefault();
  dispatch(softDeleteProduct(event.target.value));
  }

  return (
    <div className="flex justify-center w-full ">
      <tbody className="flex justify-center w-full ">
        <tr className="border-b dark:border-gray-700 flex justify-between w-full">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {name}
          </th>

          <td className="px-4 py-3">{category}</td>
          <td className="px-4 py-3 max-w-[12rem] truncate">{description}</td>
          <td className="px-4 py-3">{price}</td>
          <td className="px-4 py-3 flex items-center justify-end">
      
       <Link to ={`/editProduct/${id}`}>
       <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Edit
           </button>
       </Link>
           
            <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" value={id} onClick={(event) => handleDelete(event)}>Delete</button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

AdminCard.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.array.isRequired,
};

export default AdminCard;
