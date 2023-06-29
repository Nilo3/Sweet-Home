import Cart from "../../models/schemas/cart.js";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { user, products } = req.body;
    const { product, quantity } = products[0];

    const productObj = await Product.findById(product);
    const userObj = await User.findOne({ uid: user });
    const cart = await Cart.findOne({ user: userObj });

    if (!productObj) {
      return res.status(400).json({ message: "Product not found" });
    }

    if (!userObj) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!cart) {
      const quantityToAdd = parseInt(quantity);

      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        return res.status(400).json({ message: "Invalid quantity provided" });
      }

      const newCart = new Cart({
        user: userObj,
        products: [{ product: productObj._id, quantity: quantityToAdd }],
        totalAmount: productObj.price * quantityToAdd,
      });

      userObj.cart = [...userObj.cart, newCart];
      await userObj.save();

      productObj.inCart = true;
      await newCart.save();

      return res.json({ message: "Product added to cart", cart: newCart });
    }

    const productInCartIndex = cart.products.findIndex(
      (item) => item.product.toString() === product
    );

    if (productInCartIndex === -1) {
      const quantityToAdd = parseInt(quantity);

      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        return res.status(400).json({ message: "Invalid quantity provided" });
      }

      if (isNaN(cart.totalAmount) || cart.totalAmount < 0) {
        return res.status(400).json({ message: "Invalid total amount in cart" });
      }

      cart.products.push({ product: productObj._id, quantity: quantityToAdd });
      cart.totalAmount += productObj.price * quantityToAdd;
    } else {
      const quantityToAdd = parseInt(quantity);

      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        return res.status(400).json({ message: "Invalid quantity provided" });
      }

      if (isNaN(cart.totalAmount) || cart.totalAmount < 0) {
        return res.status(400).json({ message: "Invalid total amount in cart" });
      }

      userObj.cart = [...userObj.cart, cart._id];
      await userObj.save();

      const selectedProduct = cart.products[productInCartIndex];
      selectedProduct.quantity += quantityToAdd;
      cart.totalAmount += productObj.price * quantityToAdd;
    }

    await cart.save();

    productObj.inCart = true;
    await productObj.save();

    return res.json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
