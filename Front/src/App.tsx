
import 'tailwindcss/tailwind.css';
import Home from './views/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Recommendations from './Components/Recommendations/Recommendations';




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



