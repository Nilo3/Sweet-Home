const express = require("express")
const morgan = require("morgan")
const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.get("/user", (req,res) => {
    res.send("holi")
})

module.exports = server;