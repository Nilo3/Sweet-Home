import User from "../../models/schemas/user.js";
import Order from "../../models/schemas/order.js"
import Review from "../../models/schemas/reviews.js";
import Cart from "../../models/schemas/cart.js";

export default async (req, res) => {
  const { name, email, password, isAdmin, cart, bought, favorites, userReviews, userOrders } = req.body;

  if (!name || !email || !password ) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {

    /*const categoryPromises = cart.map((cartId)=> Cart.findById(cartId))
    const reviewPromises = userReviews.map((reviewId) => Review.findById(reviewId));
    const orderPromises = userOrders.map((orderId)=> Order.findById(orderId));
    

    const [cart, userReviews, userOrders] = await Promise.all([Promise.all(categoryPromises), Promise.all(reviewPromises), Promise.all(orderPromises)]);
*/
    const newUser = await User.create({
      name,
      email,
      password,
      /*
      isAdmin,
      cart: cart.map((car)=> car._id),
      userReviews: userReviews.map((userReview) => userReview._id),
      userOrders: userOrders.map((userOrder) => userOrder._id),
      */
    });
    
    return res.json(newUser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
