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

      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="..." alt="Card image cap" />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Card title</h5>
            <p className="text-gray-700 text-base">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="px-6 py-4">
            <small className="text-gray-500">Last updated 3 mins ago</small>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="..." alt="Card image cap" />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Card title</h5>
            <p className="text-gray-700 text-base">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="px-6 py-4">
            <small className="text-gray-500">Last updated 3 mins ago</small>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="..." alt="Card image cap" />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Card title</h5>
            <p className="text-gray-700 text-base">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="px-6 py-4">
            <small className="text-gray-500">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      <MostValued />
    </div>
  );
}

export default Home;
