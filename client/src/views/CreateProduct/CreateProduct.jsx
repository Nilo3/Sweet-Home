import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct, getCategory } from "../../redux/actions/actions";
import { validate } from "../../utils/validate"; //? Validation, work in progress...

const CreateProduct = () => {
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    category: [],
  });

  const category = useSelector((state) => state.category);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

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
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(input);
    //? Convert to number because the back need it
    const price = parseFloat(input.price);
    const stock = parseInt(input.stock);
    //? Added the category _id into an array
    const category =
      typeof input.category === "string" ? [input.category] : input.category;
    if (Object.keys(validationErrors).length === 0) {
      //? Send the inputs with the parsed values
      dispatch(postProduct({ ...input, category, price, stock }));
      setInput({
        name: "",
        price: "",
        stock: "",
        description: "",
        image: "",
        category: [],
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
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Create a new product
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field"
              placeholder="Enter product name"
              value={input.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="input-field"
              value={input.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              {category.map((cat) => (
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="10"
              required
              className="input-field"
              placeholder="Enter product price"
              value={input.price}
              onChange={handleChange}
            />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              step="10"
              required
              className="input-field"
              placeholder="Enter a stock"
              value={input.stock}
              onChange={handleChange}
            />
            {errors.stock && <p className="text-red-500">{errors.stock}</p>}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              required
              className="input-field"
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              className="input-field"
              placeholder="Enter image URL"
              value={input.image}
              onChange={handleChange}
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
