import Order from "../../models/schemas/order.js";

export default async (req, res) => {
  const { orderId } = req.params;
  const { user, products, totalPrice, isPaid, paidAt } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        user,
        products,
        totalPrice,
        isPaid,
        paidAt,
      },
      { new: true }
    );
    res.status(200).json(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};