import 'tailwindcss/tailwind.css';
import Recommendations from '../../components/Recommendations/Recommendations';




function Home() {
  return (
  <div className="flex items-center justify-center h-screen bg-orange-200">
      <h1 className="text-4xl text-center">SWEET HOME</h1>
    
    <Recommendations/>
    
    



    </div>

  );
}

export default Home;