import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "../Back/Dataimport.js";
import productRoute from "../Back/src/Routes/Products/ProductRoutes.js";



dotenv.config();
connectDatabase();
const app = express();

// API
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)

app.get("/", (req,res) => {
    res.send("API is Running...")
})

const PORT = 4000;

app.listen(PORT, console.log(`server running on port ${PORT}`));