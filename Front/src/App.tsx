import 'tailwindcss/tailwind.css';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';

import Products from './views/ShopNow/Products';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
      <div>
        <Navbar/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      <Footer/>

      </div>

  );
}

export default App;


