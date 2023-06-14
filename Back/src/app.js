import express from "express"
import morgan from "morgan"
import cors from "cors"
import routes from "./routes/index.js"

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());


server.use("/", routes);

export default server