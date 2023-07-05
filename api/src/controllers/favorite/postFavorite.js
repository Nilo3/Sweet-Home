import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { userUid } = req.params;
    const { productId } = req.body;
    
    const user = await User.findOne({ uid: userUid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favorites.push(productId);
    await user.save();

    return res.status(201).json({ message: "Favorite added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
