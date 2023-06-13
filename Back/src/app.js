const express = require("express")
const morgan = require("morgan")
const server = express();

//? Prueba de base de datos
const connectToDatabase = require("./db/db");
connectToDatabase();

server.use(express.json());
server.use(morgan("dev"));

server.get("/prueba", (req,res) => {
    res.send("holi")
})


module.exports = server;