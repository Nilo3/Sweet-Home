import server from "./src/app.js"
import dbConnect from"./src/models/index.js"

server.listen(3001, () => {
    console.log("Server on port 3001");
})
dbConnect()