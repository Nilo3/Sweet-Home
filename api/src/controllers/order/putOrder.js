import Order from "../../models/schemas/order.js";

export default async (req, res) => {
    const { orderId } = req.params;
    const { user, product, totalPrice, isPaid, padAt } = req.body;
    try {
        const order = await Order.updateOne({ _id: orderId },
            {
                $set: {
                    user,
                    product,
                    totalPrice,
                    isPaid,
                    padAt,
                }
            }, { new: true });
        res.status(200).json(order)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}