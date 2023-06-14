const bcrypt = require("bcryptjs")

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    cart: [],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    cart: [],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    cart: [],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  },
  {
    id: "4",
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    cart: [],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  },
  {
    id: "5",
    name: "Bob Williams",
    email: "bobwilliams@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    cart: [],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  }
];

module.exports = users