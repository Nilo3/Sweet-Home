
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Products from './views/ShopNow/Products'
import About from './views/About/About'
import Detail from './views/Detail/Detail'
import Shopping from "./views/ShoppingCart/ShoppingCart"
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Register from './views/Login/Register'
import {Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/authContex'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './views/Dashboard Admin/Dashboard'
import CreateProduct from './views/CreateProduct/CreateProduct'

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
          <Route path="/shopping" element={<Layout><Shopping /></Layout>} />
          <Route path="/products/:id" element={<Layout><Detail /></Layout>} />
          <Route path="/adminDashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/createProduct" element={<Layout><CreateProduct /></Layout>} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;


//las rutas que quiero que esten protegidas, las envuelvo en <ProtectedRoute><ejemploHome/></ProtectedRoute> previo importarlo