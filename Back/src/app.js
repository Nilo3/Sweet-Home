const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const server = express();
const routes = require("./routes/index")


server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use("/", routes);

server.get("/prueba", (req,res) => {
    res.send("holi")
})


  


module.exports = server;