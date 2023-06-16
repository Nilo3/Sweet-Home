// Home.js
import 'tailwindcss/tailwind.css';
import React from 'react';
import Recommendations from '../../components/Recommendations/Recomendations';
import MostValued from '../../components/MostValue/MostValue';
import NewProducts from '../../components/NewProducts/NewProducts';
import TopWeek from '../../components/TopWeek/TopWeek';

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <img className="h-auto max-w-full rounded-lg w-full" src="https://i.pinimg.com/564x/fc/cf/67/fccf6769e22f3470c821e18d0b082b22.jpg" alt="" />
        <h1 className="text-black text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Turn your House into a home</h1>
      </div>
      <section id="recommendationsSection">
        <Recommendations />
      </section>
      <section id="topWeekSection">
        <TopWeek />
      </section>
      <br />
      <section id="newProductsSection">
        <NewProducts />
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
