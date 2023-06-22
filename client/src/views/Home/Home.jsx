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
           
           <h1 className="font-serif tracking-wider text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-60 dark:bg-[#000000] bg-opacity-75 dark:bg-opacity-50 rounded text-shadow  mt-[-100px]">
  Turn your house into a home
</h1>


        <img
          className="h-auto max-w-full rounded-lg w-full"
          src={homeimage}
          alt="home_page"
        />
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
