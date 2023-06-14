// import { useState } from 'react'

import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel'


function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <div className="flex items-center justify-center h-screen bg-orange-200">
      <h1 className="text-4xl text-center">SWEET HOME</h1>
    
    </div>
    </>
  );
}

export default Home;

