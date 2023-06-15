import Product from "../../models/schemas/product.js";


const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const persona = await Product.deleteOne({_id: productId})
        res.status(200).send({message: "Producto eliminado", persona})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export default deleteProduct