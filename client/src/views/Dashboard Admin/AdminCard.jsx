import { useEffect } from 'react';
import {deleteProduct} from '../../Redux/actions/actions'
import { useDispatch } from 'react-redux';



const AdminCard = ({id,  name, category, description, price}) => {

const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(deleteProduct(id))
  }, [])

function handleDelete (event) {
  event.preventDefault()
  dispatch(deleteProduct(event.target.value))
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
            <button>Edit</button>
          <button onClick={(event) => handleDelete(event)}>Delete</button>
          </td>
        </tr>
      </tbody>

      
    </div>
  );
};

export default AdminCard;
