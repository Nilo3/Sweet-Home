// import Product from "../../models/schemas/product.js";
// import Category from "../../models/schemas/category.js";
// import Review from "../../models/schemas/reviews.js";
// import User from "../../models/schemas/user.js";

// export default async (req, res) => {
//   try {
//     const products = await Product.find({})
//       .populate({
//         path: "category",
//         model: Category,
//       })
//       .populate({
//         path: "review",
//         model: Review,
//         populate: {
//           path: "createdBy",
//           model: User,
//         },
//       })
//       .exec();

//     return res.status(200).json(products);
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: error.message });
//   }
// };

import Product from "../../models/schemas/product.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";
import mongoose from "mongoose";

export default async (req, res) => {
  try {
    const { page = 1, limit = 15, name, category, price, sortBy } = req.query;

    const query = {};

    if (name) {
      query.name = { $regex: new RegExp(name, "i") };
    }

    if (category) {
      query.category = mongoose.Types.ObjectId(category);
    }

    if (price) {
      const priceRange = price.split("-");
      if (priceRange.length === 2) {
        query.price = {
          $gte: parseInt(priceRange[0]),
          $lte: parseInt(priceRange[1]),
        };
      }
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      populate: [
        { path: "category", model: Category },
        {
          path: "review",
          model: Review,
          populate: {
            path: "createdBy",
            model: User,
          },
        },
      ],
      sort: sortBy ? { rating: -1 } : { createdAt: -1 },
    };

    const result = await Product.paginate(query, options);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};