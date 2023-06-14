import 'tailwindcss/tailwind.css';
import Recommendations from '../../components/Recommendations/Recommendations';
import MostValued from '../../components/MostValued/MostValued';

function Home() {
  return (
    <div className='prueba'>
      <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#EDEDE9", height: "200vh" }}>
        <h1 className="text-4xl text-center">SWEET HOME</h1>
      </div>

      <Recommendations />

      

      <MostValued />
    </div>
  );
}

export default Home;
