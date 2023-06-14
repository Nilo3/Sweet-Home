
import 'tailwindcss/tailwind.css';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'


import Products from './views/ShopNow/Products';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Navbar />
      <Home/>  
    <div className="flex items-center justify-center h-screen " style={{ backgroundColor: "#EDEDE9", height:"100vh"}}>
   
    
    </div>
    </>
  );
}

export default App;


