
import 'tailwindcss/tailwind.css';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';





function App() {
  return (
    <>
    <Navbar />
      <Home/>  
    <div className="flex items-center justify-center h-screen " style={{ backgroundColor: "#EDEDE9", height:"100vh"}}>
   
    <Footer/>
    </div>
    </>
  );
}

export default App;



