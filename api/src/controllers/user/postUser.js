import User from "../../models/schemas/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt.js";

export default async (req, res) => {
  const { name, email, password, isAdmin, accessToken, cart, bought, favorites, userReviews, userOrders } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing data" });
    }
    console.log(email);

    // Verificar si el email ya está registrado en la base de datos
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(409).json({ message: "This email is already registered" });
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
