import Product from "../../models/schemas/product.js";

export default async (req, res) => {
    const { productId } = req.params;
    const { name, price, image, description, stock, inCart, category, review, isDelete } = req.body;
    try {
        const product = await Product.updateOne({ _id: productId },
            {
                $set: {
                    name,
                    price,
                    image,
                    description,
                    stock,
                    inCart,
                    category,
                    review,
                    isDelete,
                }
            }, { new: true });
        res.status(200).json(product)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}