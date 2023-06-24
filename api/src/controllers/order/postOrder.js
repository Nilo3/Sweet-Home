import mercadopago from "mercadopago";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";
import Order from "../../models/schemas/order.js";

export default async (req, res) => {
  try {
    const { user, product } = req.body;

    const foundUser = await User.findOne({ _id: user });
    const foundProducts = await Product.find({ _id: { $in: product } });

    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }
    // if (!foundProducts || foundProducts.length !== product.length) {
    //   return res.status(400).json({ message: "One or more products not found" });
    // }

    let totalPrice = 0;
    for (const foundProduct of foundProducts) {
      totalPrice += foundProduct.price;
    }

    const newOrder = new Order({
      user: foundUser._id,
      product: foundProducts.map((foundProduct) => foundProduct._id),
      quantity: foundProducts.length,
      totalPrice,
      padAt: new Date()
    });

    const savedOrder = await newOrder.save();

    mercadopago.configure({
      access_token: "TEST-373757202745327-062218-fa0a61220d206b6b0540c92d588ceb20-1405850896"
    });

    const preference = {
      items: [
        {
          title: "Muebles",
          unit_price: totalPrice/foundProducts.length,
          currency_id: "ARS",
          quantity: foundProducts.length,
        }
      ],
      back_urls: {
        success: "http://localhost:3001/api/success",
        failure: "http://localhost:3001/api/failure",
        pending: "http://localhost:3001/api/pending",
      }
    };

    const result = await mercadopago.preferences.create(preference);
    console.log(result);

    res.status(200).json(result.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};