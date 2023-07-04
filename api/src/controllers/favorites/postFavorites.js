import Favorites from "../../models/schemas/favorites.js";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { user, products } = req.body;
    const { product } = products[0];
    console.log("Product ID:", product);
    const productObj = await Product.findById(product);
    const userObj = await User.findOne({ uid: user });
    const favorites = await Favorites.findOne({ user: userObj });

    if (!productObj) {
      return res.status(400).json({ message: "Product not found" });
    }

    if (!userObj) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!favorites) {
      const newFavorites = new Favorites({
        user: userObj._id,
        products: [productObj._id], // Modificar aquí
      });

      userObj.favorites.push(newFavorites);
      await userObj.save();

      productObj.inFavorites = true;
      await productObj.save();

      await newFavorites.save();

      return res.json({ message: "Product added to favorites", favorites: newFavorites });
    }

    const productInFavoritesIndex = favorites.products.findIndex(
      (item) => item.toString() === productObj._id.toString() // Modificar aquí
    );

    if (productInFavoritesIndex === -1) {
      favorites.products.push(productObj._id); // Modificar aquí
    }

    await favorites.save();

    productObj.inFavorites = true;
    await productObj.save();

    return res.json({ message: "Product added to favorites", favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
