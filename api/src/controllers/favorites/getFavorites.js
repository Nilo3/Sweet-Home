import Favorites from "../../models/schemas/favorites.js";

export default async (req, res) => {
  try {
    const favorites = await Favorites.find()
      .populate("user")
      .populate("products.product");

    if (favorites.length > 0) {
      return res.json(favorites);
    } else {
      return res.status(500).json({ message: "There are no favorites available" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
