import User from "../../models/schemas/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt.js";

export default async (req, res) => {
  const { name, uid, photoURL, email, password, isAdmin, isDelete, accessToken, cart, bought, favorites, userReviews, userOrders } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing data" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "This email is already registered" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      uid,
      name,
      photoURL,
      email,
      password: hashedPassword,
      isAdmin,
      accessToken: generateToken({ name: name, email: email }),
      isDelete
    });

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
