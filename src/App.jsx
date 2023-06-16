import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Products from './views/ShopNow/Products'
import About from './views/About/About'
import Detail from './views/Detail/Detail'
import Home from './views/Home/Home'

import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div>
<Navbar/>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/detail/:id' element={<Detail/>}/>
{/* Ruta carrito */}
</Routes>

<Footer/>
      
    </div>
  )
}

export default App
