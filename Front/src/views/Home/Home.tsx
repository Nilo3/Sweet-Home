// import { useState } from 'react'

import 'tailwindcss/tailwind.css';
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer';
import Recommendations from '../../Components/Recommendations/Recommendations';
import "./Home.css"


function Home() {
  return (
    <body>
   
    <Navbar/>
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#EDEDE9", height: "200vh" }}>
      <h1 className="text-4xl text-center">SWEET HOME</h1>
    </div>
    <div className='recommendationContainer'>
    </div>
    <footer className='footer'>
    <Footer/>
    </footer>
    </body>
  );
}

export default Home;

