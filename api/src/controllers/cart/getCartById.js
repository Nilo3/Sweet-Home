import Cart from "../../models/schemas/cart.js";

export default async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id)
      


    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
