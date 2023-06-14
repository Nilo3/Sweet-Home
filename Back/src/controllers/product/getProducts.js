const { Product } = require("../../models/schemas/product");
const { Category } = require("../../models/schemas/category");
const { Review } = require("../../models/schemas/reviews");
const { User } = require("../../models/schemas/user")

module.exports = async (req, res) => {

  //? Configuración de paginado
  const page = req.query.page || 1;
  const limit = req.query.limit || 15;

  //? Seteo de parámetros para filtros
  const { name, priceAmount, relevance, searchFilter } = req.query;
  const categories = req.headers.category ? req.headers.category.split(",") : [""];

  //? Configuración de ordenación
  let sortBy = {};
  if (name) {
    sortBy.name = name;
  }
  if (priceAmount) {
    sortBy.priceAmount = priceAmount;
  }
  if (relevance) {
    sortBy.relevance = relevance;
  }

  //? Función de filtros de precio
  const getMinMaxFilters = ({ minPrice, maxPrice }) => {
    const filters = {};
    if (minPrice) {
      filters.price = { $gt: minPrice - 0.01 };
    }
    if (maxPrice) {
      filters.price = { ...filters.price, $lt: maxPrice * 1 + 0.01 };
    }
    return filters;
  };

  //? Obtener los filtros de precio
  const minMaxFilters = getMinMaxFilters(req.query);

  try {
    const products = await Product.paginate(
      {
        ...(categories && categories[0] !== "" && { category: { $in: categories } }),
        ...(searchFilter && {
          name: {
            $regex: new RegExp(`^${searchFilter.toLowerCase()}`, "i"),
          },
        }),
        ...(minMaxFilters && { ...minMaxFilters }),
      },
      {
        limit,
        page,
        sort: sortBy,
        collation: {
          locale: "en",
        },
        populate: [
          {
            path: "category",
            model: Category,
          },
          {
            path: "review",
            model: Review,
            populate: {
              path: "createdBy",
              model: User,
            },
          },
        ],
      }
    );

    return res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};