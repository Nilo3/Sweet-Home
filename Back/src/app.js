const Product = require("./models/schemas/product");
const mongoose = require('mongoose');
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const server = express();
const routes = require("./routes/index")


server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.get("/prueba", (req,res) => {
    res.send("holi")
})


server.post( "/product", async (req, res) => {
    try {
      const product = new Product({
        name: req.body.name,
        id: new mongoose.Types.ObjectId(),
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        createdAt: new Date(),
        stock: req.body.stock,
        category: null,
        review: null
      });
  
      await product.save();
  
      res.status(201).json({ message: "Product created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  })
 
  

server.use("/", routes);

module.exports = server;