const users = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
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
    password: "password456",
    isAdmin: false,
    cart: [],
    bought: null,
    favorites: [
      {
        id: "3",
        name: "Juego de sábanas de algodón",
        price: 39.99,
        image: "https://example.com/sabanas.jpg",
        description: "Un juego de sábanas de algodón de alta calidad para una cama tamaño queen.",
        createdAt: new Date(),
        stock: 30,
        category: "Dormitorio",
        review: null
      },
      {
        id: "4",
        name: "Set de organizadores de armario",
        price: 19.99,
        image: "https://example.com/organizadores.jpg",
        description: "Un set de organizadores de armario para mantener tu ropa y accesorios ordenados.",
        createdAt: new Date(),
        stock: 40,
        category: "Organización",
        review: null
      }
    ],
    userReviews: [
      {
        id: "1",
        rating: 4,
        createdBy: "1",
        product: "1"
      },
      {
        id: "2",
        rating: 5,
        createdBy: "2",
        product: "2"
      }
    ],
    userOrders: []
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    isAdmin: true,
    cart: [
      {
        id: "3",
        user: "3",
        products: [{ product: "3", quantity: 1 }],
        totalAmount: 39.99
      },
      {
        id: "4",
        user: "4",
        products: [{ product: "4", quantity: 3 }],
        totalAmount: 59.97
      }
    ],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  },
  {
    id: "4",
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    password: "password789",
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
    password: "passwordABC",
    isAdmin: false,
    cart: [],
    bought: null,
    favorites: [],
    userReviews: [],
    userOrders: []
  }
];

module.exports = users