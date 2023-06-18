import Cart from "../../models/schemas/cart.js"
import Product from "../../models/schemas/product.js"
import User from "../../models/schemas/user.js"

export default async (req, res) => {
  const { productId, userId } = req.body;
  try {
    const product = await Product.findById(productId);
    const user = await User.findById(userId);
    const cart = await Cart.findOne({ user: userId });

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!cart) {
      const newCart = new Cart({
        user: userId,
        product: [{ product: productId, quantity: 1 }],
        totalAmount: product.price,
      });

      await newCart.save();

      product.inCart = true;
      await product.save();

      return res.json({ message: "Product added to cart", cart: newCart });
    }

    const productInCartIndex = cart.product.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productInCartIndex === -1) {
      cart.products.push({ product: productId, quantity: 1 });
      cart.totalAmount += product.price;

      await cart.save();

      product.inCart = true;
      await product.save();

      return res.json({ message: "Product added to cart", cart });
    } else {
      return res.status(400).json({ message: "Product already in cart" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
