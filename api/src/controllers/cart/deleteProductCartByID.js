import Cart from "../../models/schemas/cart.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  const { cartId } = req.params;

  try {
    const cart = await Cart.findByIdAndDelete(cartId);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Eliminar la referencia al carrito en el usuario
    await User.findOneAndUpdate(
      { cart: cartId },
      { $pull: { cart: cartId } },
      { new: true }
    );

    res.status(200).send({ message: "Cart deleted successfully", cart });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
