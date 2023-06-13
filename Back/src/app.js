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

server.use("/", routes);

module.exports = server;