
import 'tailwindcss/tailwind.css';
import Home from './views/Home/Home';
import Products from './views/ShopNow/Products';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


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


      </div>
  );
}

export default App;

