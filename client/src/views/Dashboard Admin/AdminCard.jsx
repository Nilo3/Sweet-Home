import { useEffect } from "react";
import { deleteProduct, getCategory, getProducts } from "../../redux/actions/actions";
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
  dispatch(deleteProduct(event.target.value));
  }

  return (
    <div>
      <tbody>
        <tr className="border-b dark:border-gray-700">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {name}&#34;
          </th>

          <td className="px-4 py-3">{category}</td>
          <td className="px-4 py-3 max-w-[12rem] truncate">{description}</td>
          <td className="px-4 py-3">{price}</td>
          <td className="px-4 py-3 flex items-center justify-end">
      
       <Link to ={`/editProduct/${id}`}>
       <button>
            Edit
           </button>
       </Link>
           
            <button value={id} onClick={(event) => handleDelete(event)}>Delete</button>
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
