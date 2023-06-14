const server = require("./src/app")
const dbConnect = require("./src/models/index")


server.listen(3001, () => {
    console.log("Server on port 3001");
})
dbConnect()