// const User = require("../../models/schemas/User")




// module.exports = async (req, res) => {
//   try {
//     const users = await User.find()
//       .populate({
//         path: "bought",
//         populate: [
//           {
//             path: "category",
//             model: "Category",
//           },
//           {
//             path: "UserReviews",
//             model: "userReviews",
//           },
//         ],
//       })
//       .populate({
//         path: "userReviews",
//         populate: [
//           {
//             path: "product",
//             model: "Products",
//           },
//           {
//             path: "userReviews",
//             model: "User",
//           },
//         ],
//       })
//       .populate({
//         path: "userOrders",
//         populate: [
//           {
//             path: "product",
//             model: "Products",
//           },
//           {
//             path: "buyer",
//             model: "User",
//           },
//         ],
//       })
//       .populate("favorites");
//     return res.status(200).json(users);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };