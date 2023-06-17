
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Products from './views/ShopNow/Products'
import About from './views/About/About'
import Detail from './views/Detail/Detail'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Register from './views/Login/Register'
import {Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/authContex'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<>
            <Navbar />
            <Home />
            <Footer />
          </>} />
          <Route path='/products' element={<>
            <Navbar />
            <Products />
            <Footer />
          </>} />
          <Route path='/about' element={<>
            <Navbar />
            <About />
            <Footer />
          </>} />
          <Route path='/detail/:id' element={<>
            <Navbar />
            <Detail />
            <Footer />
          </>} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </div>
  )
}

export default App;


//las rutas que quiero que esten protegidas, las envuelvo en <ProtectedRoute><ejemploHome/></ProtectedRoute> previo importarlo