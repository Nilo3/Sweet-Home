import Cart from "../../models/schemas/cart";
import Product from "../../models/schemas/product";

export default async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ mensaje: "The cart does not exist" });
    }

    const productToDelete = cart.products.find(
      (product) => product._id.toString() === productId
    );
    if (!productToDelete) {
      return res
        .status(404)
        .json({ mensaje: "The product does not exist in this cart" });
    }
    const updatedProduct = cart.products.filter(
      (product) => product._id.toString() !== productId
    );
    cart.products = updatedProduct;
    await cart.save();

    await Beats.findByIdAndUpdate(beatId, { inCart: false });

    if (cart.beats.length === 0) {
      await Cart.findByIdAndDelete(cartId);
      return res.json({
        mensaje: "The cart and the product were successfully deleted",
      });
    }

    return res.json({
      mensaje: `Product ${productToDelete.product.name} was removed from cart`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "An error has occured" });
  }
};