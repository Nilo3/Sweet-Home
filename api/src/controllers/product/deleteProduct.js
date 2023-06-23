import Product from "../../models/schemas/product.js";

export default async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.deleteOne({ _id: productId })
        res.status(200).send({ message: "Product deleted successfully", product })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}