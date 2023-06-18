import Product from "../../models/schemas/product.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const products = await Product.find({})
      .populate({
        path: "category",
        model: Category,
      })
      .populate({
        path: "review",
        model: Review,
        populate: {
          path: "createdBy",
          model: User,
        },
      })
      .exec();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

// import Product from "../../models/schemas/product.js";
// import Category from "../../models/schemas/category.js";
// import Review from "../../models/schemas/reviews.js";
// import User from "../../models/schemas/user.js";
// import mongoose from "mongoose";

// export default async (req, res) => {
//   try {
//     const { page = 1, limit = 9, name, category, sortBy } = req.query;

//     const query = {};

//     if (name) {
//       query.name = { $regex: new RegExp(name, "i") };
//     }

//     if (category) {
//       query.category = new mongoose.Types.ObjectId(category);
//     }

//     const options = {
//       page: parseInt(page),
//       limit: parseInt(limit),
//       populate: [
//         { path: "category", model: Category },
//         {
//           path: "review",
//           model: Review,
//           populate: {
//             path: "createdBy",
//             model: User,
//           },
//         },
//       ],
//       sort: sortBy === "review" ? { rating: -1 } : sortBy === "name" ? { name: 1 } : sortBy === "price" ? { price: 1 } : { createdAt: -1 },
//     };

//     const result = await Product.paginate(query, options);

//     return res.status(200).json(result);
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: error.message });
//   }
// };