import Product from "../../models/schemas/product.js";

const putProduct = async (req, res) => {
    const { productId } = req.params;
    const { name, price, image, description, stock, category, review } = req.body;
    try {
        const product = await Product.updateOne({ _id: productId },
            {
                $set: {
                    name,
                    price,
                    image,
                    description,
                    stock,
                    category,
                    review,
                }
            }, { new: true });
        res.status(200).json(product)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

export default putProduct