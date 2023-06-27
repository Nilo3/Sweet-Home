
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
import User from "./views/User/User"
import ChatBot from "react-simple-chatbot";
import { useState } from "react";
import person from "../src/assets/image/person-placeholder-400x400.png"
import { ThemeProvider } from 'styled-components';
import PropTypes from "prop-types";
import {SiChatbot} from "react-icons/si"


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#000000',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#000000',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: "Greet",
    message: "Hi, thanks for visiting Sweet Home",
    trigger: "Ask email"
  },
  {
    id: "Ask email",
    message: "Please enter your email",
    trigger: "waiting1"
  },
  {
    id: "waiting1",
    user: true,
    trigger: "Ask Name"
  },
  {
    id: "Ask Name",
    message: "Please enter your name",
    trigger: "waiting2"
  },
  {
    id: "waiting2",
    user: true,
    trigger: "Name"
  },
  {
    id: "Name",
    message: "Hi {previousValue}, How can I help you today?",
    trigger: "issues"
  },
  {
    id: "issues",
    options: [
      { value: "Shop", label: "Shop", trigger: "Shop" },
      { value: "Reviews", label: "Reviews", trigger: "Reviews" },
      { value: "Shipping", label: "Shipping", trigger: "Shipping" },
      { value: "Payment", label: "Payment", trigger: "Payment" },
    ],
  },
  {
    id: "Shop",
    message: "Thanks for providing your issue, one of our executives will shortly get back to you to resolve the issue",
    end: true
  },
  {
    id: "Reviews",
    message: "Thanks for providing your issue, one of our executives will shortly get back to you to resolve the issue",
    end: true
  },
  {
    id: "Shipping",
    message: "Thanks for providing your issue, one of our executives will shortly get back to you to resolve the issue",
    end: true
  },
  {
    id: "Payment",
    message: "Thanks for providing your issue, one of our executives will shortly get back to you to resolve the issue",
    end: true
  },
  
];

function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setShowButton(false);
  };

  const hideChatbot = () => {
    setShowChatbot(false);
    setShowButton(true);
  };
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/my_profile" element={<Layout><User/></Layout>} />
          <Route path="/checkout" element={<Layout><Shopping /></Layout>} />
          <Route path="/products/:id" element={<Layout><Detail /></Layout>} />
          <Route path="/adminDashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/createProduct" element={<Layout><CreateProduct /></Layout>} />
          <Route path="/profile" element={<Layout><Profile/></Layout>} />
          <Route path="/editProduct" element={<Layout><UploadProduct/></Layout>} />
        </Routes>
     
        <ThemeProvider theme={theme}>
          <div style={{ flex: 1, position: "relative" }}>
            {showButton && (
              <button
                className="bg-blue-100 text-blue-800 text-5xl font-semibold mb-20 px-5 py-5 rounded-full dark:bg-blue-200 dark:text-blue-800 ml-auto mr-20"
                onClick={toggleChatbot}
                style={{ position: "absolute", bottom: "calc(100% - 50px)", right: "20px" }}
              >
                <SiChatbot />
              </button>
            )}
            {showChatbot && (
              <div style={{ position: "absolute", bottom: "5px", right: "20px" }}>
                <div style={{ position: "relative" }}>
                  <ChatBot
                    steps={steps}
                    headerTitle="Chatbot"
                    userAvatar={person}
                  />
                 <button
  className="text-white hover:text-white-900 dark:hover:text-white text-m mr-5 mt-3"
  onClick={hideChatbot}
  style={{
    position: "absolute",
    top: "5px",
    right: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 9999,  transition: "right 1s ease-in-out"
  }}
>
  X
</button>
                </div>
              </div>
            )}
          </div>
        </ThemeProvider>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
