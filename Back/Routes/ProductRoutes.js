import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router()


//GET ALL PRODUCTS
productRoute.get("/", asyncHandler(
    async(req,res)=>{
        const products = await Product.find({})
        res.json(products)
    }
))

//GET PRODUCT BY ID
productRoute.get("/:id", asyncHandler(
    async(req,res)=>{
        const product = await Product.findById(req.params.id)
        if(product){
            res.json(product);
        } else{
            res.status(404);
            throw new Error("Product not Found");
        }
        res.json(products)
    }
))

export default productRoute;