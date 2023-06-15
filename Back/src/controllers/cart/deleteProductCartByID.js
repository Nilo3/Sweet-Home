import Cart from "../../models/schemas/cart";
import Product from "../../models/schemas/product";

const deleteProductinCartById = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ mensaje: "El carrito no existe" });
    }

    // Eliminar el beat en específico del carrito
    const producttoDelete = cart.products.find(
      (product) => product._id.toString() === productId
    );
    if (!producttoDelete) {
      return res
        .status(404)
        .json({ mensaje: "El producto no existe en este carrito" });
    }
    const updatedProduct = cart.products.filter(
      (product) => product._id.toString() !== productId
    );
    cart.products = updatedProduct;
    await cart.save();

    // Actualizar el estado del beat eliminado
    await Beats.findByIdAndUpdate(beatId, { inCart: false });

    // Eliminar el carrito si ya no tiene beats
    if (cart.beats.length === 0) {
      await Cart.findByIdAndDelete(cartId);
      return res.json({
        mensaje: "El carrito y el producto fueron eliminados exitosamente",
      });
    }

    res.json({
      mensaje: `El producto ${producttoDelete.product.name} fue eliminado del carrito`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error" });
  }
};