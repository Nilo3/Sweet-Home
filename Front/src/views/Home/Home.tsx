// import { useState } from 'react'

import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbar/Navbar';


function Home() {
  return (
    <>
   
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-orange-200">
      <h1 className="text-4xl text-center">SWEET HOME</h1>
    
    </div>
    </>
  );
}

export default Home;

