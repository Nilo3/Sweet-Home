import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadProduct, getCategory } from "../../Redux/actions/actions";
import { validate } from "../../utils/validate"; //? Validation, work in progress...

const UploadProduct = () => {
  const [input, setInput] = useState({
    name: "",
    price: null,
    stock: null,
    description: "",
    image: "",
    category: [],
    isDelete: false,
  });

  const category = useSelector((state) => state.category);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategory());
   
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validate(name, value);
    const updatedValue = name === "category" ? [value] : value;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: updatedValue,
      isDelete: name === "disable" ? value === "true" : prevInput.isDelete, 
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(input);
    const price = parseFloat(input.price);
    const stock = parseInt(input.stock);
    const category =
      typeof input.category === "string" ? [input.category] : input.category;
    if (Object.keys(validationErrors).length === 0) {
      dispatch(uploadProduct({ ...input, category, price, stock }, id));
      setInput({
        name: "",
        price: null,
        stock: null,
        description: "",
        image: "",
        category: [],
        isDelete: null,
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-normal text-gray-900 dark:text-white mb-8 mx-28">
          Edit Product
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre..."
              value={input.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={input.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              {category?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {" "}
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Price ($)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="10"
              required
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product price"
              value={input.price}
              onChange={handleChange}
            />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              step="10"
              required
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter a stock"
              value={input.stock}
              onChange={handleChange}
            />
            {errors.stock && <p className="text-red-500">{errors.stock}</p>}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              required
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product description"
              value={input.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter image URL"
              value={input.image}
              onChange={handleChange}
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>
          <div>
            <label
              htmlFor="disable"
              className="block text-sm font-medium text-gray-700 mb-1 mx-4"
            >
              Disable
            </label>
            <select
  id="disable"
  name="disable"
  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  value={input.isDelete ? "true" : "false"}
  onChange={handleChange}
>
  <option value="true">Sí</option>
  <option value="false">No</option>
</select>
          </div>
          <div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-4"
            >
              Confirm edit
            </button>
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  mx-24"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
