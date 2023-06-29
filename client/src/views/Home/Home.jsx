import "tailwindcss/tailwind.css";
import Recommendations from "../../components/Recommendations/Recomendations";
import MostValued from "../../components/MostValue/MostValue";
import TopWeek from "../../components/TopWeek/TopWeek";
import Inspiration from "../../components/Inspiration/Inspiration";
import homeimage from "../../assets/image/home-page-with-text.png";
import "./Home.css";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <img
        className="h-auto max-w-full rounded-b-lg w-full"
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
