import User from "../../models/schemas/user.js";
// import bcrypt from "bcryptjs";
// import { generateToken } from "../../utils/jwt.js";

export default async (req, res) => {
  const { uid, email } = req.body;

  if (!uid || !email) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    // const hashedPassword = bcrypt.hashSync(uid, 10);
    const newUser = await User.create({
      uid,
     
      email,
      // password: hashedPassword,
      // accessToken: generateToken({ uid, name, email }),
    });

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};







// import User from "../../models/schemas/user.js";
// import Order from "../../models/schemas/order.js"
// import Review from "../../models/schemas/reviews.js";
// import Cart from "../../models/schemas/cart.js";
// import bcrypt from "bcryptjs"
// import { generateToken } from "../../utils/jwt.js";

// export default async (req, res) => {
//   const { name, email, password, isAdmin,accessToken, cart, bought, favorites, userReviews, userOrders } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "Faltan datos" });
//   }

//   try {

//     /*const categoryPromises = cart.map((cartId)=> Cart.findById(cartId))
//     const reviewPromises = userReviews.map((reviewId) => Review.findById(reviewId));
//     const orderPromises = userOrders.map((orderId)=> Order.findById(orderId));
    
    
//     const [cart, userReviews, userOrders] = await Promise.all([Promise.all(categoryPromises), Promise.all(reviewPromises), Promise.all(orderPromises)]);
// */
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       isAdmin,
//       accessToken: generateToken({ name: name, email: email }),
//       /*
//       cart: cart.map((car)=> car._id),
//       userReviews: userReviews.map((userReview) => userReview._id),
//       userOrders: userOrders.map((userOrder) => userOrder._id),
//       */
//     });

//     return res.json(newUser);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
