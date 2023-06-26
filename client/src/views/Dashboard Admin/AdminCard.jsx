import { useEffect } from "react";
import { deleteProduct } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AdminCard = ({ id, name, category, description, price }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteProduct(id));
  }, []);

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
            <Link to={"/editProduct"}>
              <button>Edit</button>
            </Link>
            <button onClick={(event) => handleDelete(event)}>Delete</button>
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
