import Order  from "../../models/schemas/order.js";
import User from "../../models/schemas/user.js"
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
    try {
        const orders = await Order.find()
            .populate({
                path: "user",
                model: User,
            })
            .populate({
                path: "product",
                model: Product,
            });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
