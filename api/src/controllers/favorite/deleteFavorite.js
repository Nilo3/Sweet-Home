import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { userUid } = req.params;
    const { productId } = req.body;

    const user = await User.findOne({ uid: userUid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const favoriteIndex = user.favorites.indexOf(productId);
    if (favoriteIndex === -1) {
      return res.status(404).json({ message: "Favorite product not found" });
    }

    user.favorites.splice(favoriteIndex, 1);
    await user.save();

    return res.status(200).json({ message: "Favorite deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
