import 'tailwindcss/tailwind.css';
import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer';
import Recommendations from '../../components/Recommendations/Recommendations';
import "./Home.css"

import Carousel from '../../components/Carousel/Carousel'


function Home() {
  return (
    <>
           <div className='prueba'>
        <Navbar/>
        <Carousel/>
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#EDEDE9", height:"200vh"}}>
          
        </div>
       {/* <Recommendations /> */}
        <Footer/>
        </div>
        </>
  
     
    
  );
}

export default Home;