import Favorites from "../../models/schemas/favorites.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  const { favoriteId } = req.params;
  const { productId } = req.body;

  try {
    const favorites = await Favorites.findOneAndUpdate(
      { _id: favoriteId },
      { $pull: { products: productId } },
      { new: true }
    );

    if (!favorites) {
      return res.status(404).json({ error: "Favorite not found" });
    }

    await User.findOneAndUpdate(
      { favorites: favoriteId },
      { $pull: { favorites: favoriteId } },
      { new: true }
    );

    res.status(200).json({ message: "Product removed from favorites successfully", favorites });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

