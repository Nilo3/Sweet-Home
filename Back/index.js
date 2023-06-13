const server = require("./src/app")
const carts = require("./src/data/carts")
const products = require("./src/data/products")
const reviews = require("./src/data/reviews")
const dbConnect = require("./src/models/index")


server.get("/api/carts", (req, res) => {
    res.json(products)
})
server.get("/api/users", (req, res) => {
    res.json(i)
})
server.get("/api/reviews", (req, res) => {
    res.json(reviews)
})
server.get("/api/products/:id", (req, res) => {
    const product = products.find((prod) => prod.id === req.params.id )
    res.json(product)
})

server.listen(3001, () => {
    console.log("Server on port 3001");
})
dbConnect()