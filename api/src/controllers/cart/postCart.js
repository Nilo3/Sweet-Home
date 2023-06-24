import Cart from "../../models/schemas/cart.js";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { products, user } = req.body;
    const productId = products[0].product;

    const product = await Product.findById(productId);
    const user2 = await User.findOne({ _id : user});
    const cart = await Cart.findOne({ user: user }); 
   

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    if (!user2) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!cart) {
      const quantityToAdd = parseInt(products[0].quantity);

      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        return res.status(400).json({ message: "Invalid quantity provided" });
      }

      const newCart = new Cart({
        user: user2._id,
        products: [{ product: product._id, quantity: quantityToAdd }],
        totalAmount: product.price * quantityToAdd,
      });

      user2.cart = [...user2.cart, newCart];
      await user2.save()
      
      product.inCart = true;
      await newCart.save();

      return res.json({ message: "Product added to cart", cart: newCart });
    }

    const productInCartIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productInCartIndex === -1) {
      const quantityToAdd = parseInt(products[0].quantity);

      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        return res.status(400).json({ message: "Invalid quantity provided" });
      }

      if (isNaN(cart.totalAmount) || cart.totalAmount < 0) {
        return res.status(400).json({ message: "Invalid total amount in cart" });
      }

      cart.products.push({ product: productId, quantity: quantityToAdd });
      cart.totalAmount += product.price * quantityToAdd;
    } else {
      const quantityToAdd = parseInt(products[0].quantity);

      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        return res.status(400).json({ message: "Invalid quantity provided" });
      }

      if (isNaN(cart.totalAmount) || cart.totalAmount < 0) {
        return res.status(400).json({ message: "Invalid total amount in cart" });
      }

      user2.cart = [...user2.cart, cart._id];
      await user2.save()
      const selectedProduct = cart.products[productInCartIndex];
      selectedProduct.quantity += quantityToAdd;
      cart.totalAmount += product.price * quantityToAdd;
    }

    await cart.save();

    product.inCart = true;
    await product.save();

    return res.json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};