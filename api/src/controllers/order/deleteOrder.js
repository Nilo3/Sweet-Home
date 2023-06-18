import Order from "../../models/schemas/order.js"

export default async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await Order.deleteOne({ _id: orderId })
        res.status(200).send({ message: "Product deleted successfully", order })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
