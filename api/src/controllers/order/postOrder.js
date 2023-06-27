import mercadopago from "mercadopago";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";
import Order from "../../models/schemas/order.js";

export default async (req, res) => {
  try {
    const { user, products } = req.body;

    const foundUser = await User.findOne({ _id: user });
    const foundProducts = await Product.find({ _id: { $in: products.map((p) => p.product) } });

    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }
    if (!foundProducts ) {
      return res.status(400).json({ message: "One or more products not found" });
    }

    let totalPrice = 0;
    const orderProducts = [];

    for (const productData of products) {
      const { product, quantity } = productData;
      const foundProduct = foundProducts.find((p) => p._id.toString() === product);

      if (!foundProduct) {
        return res.status(400).json({ message: `Product not found: ${product}` });
      }

      const productQuantity = quantity || 1;
      const productPrice = foundProduct.price;
      const productTotalPrice = productPrice * productQuantity;

      totalPrice += productTotalPrice;

      orderProducts.push({
        product: foundProduct._id,
        quantity: productQuantity,
      });
    }

    const newOrder = new Order({
      user: foundUser._id,
      products: orderProducts,
      totalPrice: totalPrice,
      paidAt: new Date(),
    });

    const savedOrder = await newOrder.save();

    mercadopago.configure({
      access_token: "TEST-373757202745327-062218-fa0a61220d206b6b0540c92d588ceb20-1405850896",
    });

    const title = foundProducts.map((foundProduct) => foundProduct.name).join(", ");

    const preference = {
      items: [
        {
          title: title,
          unit_price: totalPrice/foundProducts.length,
          currency_id: "ARS",
          quantity: foundProducts.length,
        },
      ],
      back_urls: {
        success: "https://front-deploy-v4j8.onrender.com/products",
        failure: "http://localhost:3001/api/failure",
        pending: "http://localhost:3001/api/pending",
      },
    };

    const result = await mercadopago.preferences.create(preference);
    console.log(result);

    res.status(200).json(result.body.init_point);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};