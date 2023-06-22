import User from "../../models/schemas/user.js";
import Order from "../../models/schemas/order.js"
import Review from "../../models/schemas/reviews.js";
import Cart from "../../models/schemas/cart.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../../utils/jwt.js";


export default async (req, res) => {
  const { name, email, password, isAdmin, accessToken, cart, bought, favorites, userReviews, userOrders } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing data" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      accessToken: generateToken({ name: name, email: email }),
    });

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
