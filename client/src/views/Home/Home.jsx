// Home.js
import "tailwindcss/tailwind.css";
import Recommendations from "../../components/Recommendations/Recomendations";
import MostValued from "../../components/MostValue/MostValue";
import TopWeek from "../../components/TopWeek/TopWeek";
import Inspiration from "../../components/Inspiration/Inspiration";
import homeimage from "../../assets/image/home-page.webp";
import "./Home.css"

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
      
      <h1 className="font-serif text-black text-8xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-blue-200 dark:bg-[#000000] bg-opacity-75 dark:bg-opacity-50 rounded" >
  TURN YOUR HOUSE INTO A HOME
</h1>

        <img
          className="h-auto max-w-full rounded-lg w-full"
          src={homeimage}
          alt="home_page"
        />
      </div>
      <section id="recommendationsSection">
        <Recommendations />
      </section>
      <section id="topWeekSection">
        <TopWeek />
      </section>
      <br />
      <section id="inspirationSection">
      <Inspiration />
      </section>
      <div className="flex-grow">
        <section id="mostValuedSection">
      <MostValued />
        </section>
      </div>
    </div>
  );
}

export default Home;
