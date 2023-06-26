import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./views/ShopNow/Products";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Shopping from "./views/ShoppingCart/ShoppingCart";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import UploadProduct from './views/UploadProduct/UploadProduct'
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContex";
import { ToastContainer } from "react-toastify";
import Dashboard from './views/Dashboard Admin/Dashboard'
import CreateProduct from './views/CreateProduct/CreateProduct'
import Profile from "./views/Profile/Profile";
import "react-toastify/dist/ReactToastify.css";


import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/checkout" element={<Layout><Shopping /></Layout>} />
          <Route path="/products/:id" element={<Layout><Detail /></Layout>} />
          <Route path="/adminDashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/createProduct" element={<Layout><CreateProduct /></Layout>} />
          <Route path="/profile" element={<Layout><Profile/></Layout>} />
          <Route path="/editProduct" element={<Layout><UploadProduct/></Layout>} />
          
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
