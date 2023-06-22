import Cart from "../../models/schemas/cart.js";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  const { user, products } = req.body;
  const userId = user;

  try {
    const productList = await Product.find({
      _id: { $in: products.map((item) => item.product) },
    });

    const user = await User.findById(userId);
    const cart = await Cart.findOne({ user: userId });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    let totalAmount = 0;

    if (!cart) {
      const newCart = new Cart({
        user: userId,
        products: products.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
      });

      for (const product of productList) {
        const item = products.find((item) => item.product === product._id.toString());
        if (item) {
          totalAmount += product.price * item.quantity;
          product.inCart = true;
          await product.save();
        }
      }

      newCart.totalAmount = totalAmount;
      await newCart.save();

      user.cart = newCart._id; // Asignar el carrito al usuario
      await user.save();

      return res.json({ message: "Products added to cart", cart: newCart });
    }

    for (const product of productList) {
      const item = products.find((item) => item.product === product._id.toString());
      if (item) {
        const productInCartIndex = cart.products.findIndex(
          (item) => item.product.toString() === product._id.toString()
        );

        if (productInCartIndex === -1) {
          cart.products.push({
            product: product._id,
            quantity: item.quantity,
          });
        } else {
          cart.products[productInCartIndex].quantity += item.quantity;
        }

        totalAmount += product.price * item.quantity;
        product.inCart = true;
        await product.save();
      }
    }

    cart.totalAmount = totalAmount;
    await cart.save();

    return res.json({ message: "Products added to cart", cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};