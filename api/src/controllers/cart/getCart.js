import Cart from "../../models/schemas/cart.js"

export default async (req, res) => {
    const cart = await Cart.find();
    if(cart){
        return res.json(cart)
    } else {
        return res.json({messaje: "There is no products in cart"})
    }
};