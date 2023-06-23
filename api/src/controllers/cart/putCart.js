import Cart from "../../models/schemas/cart.js";
import Product from "../../models/schemas/product.js";

const putCart = async (req, res) => {
  const { cartId } = req.params;
  const { product, quantity } = req.body;

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: cartId, "products.product": product },
      { $set: { "products.$.quantity": quantity } },
      { new: true }
    );

    // Calculate total amount
    const cartProducts = updatedCart.products;
    let totalAmount = 0;

    for (const cartProduct of cartProducts) {
      const { product, quantity } = cartProduct;

      const fetchedProduct = await Product.findById(product);
      const productPrice = fetchedProduct.price;

      const productTotal = productPrice * quantity;
      totalAmount += productTotal;
    }

    // Update total amount in the cart
    updatedCart.totalAmount = totalAmount;
    await updatedCart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export default putCart;



