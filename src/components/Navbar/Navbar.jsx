import React from 'react';
import Container from './Container';
import ShopNowNav from './Buttons/ShopNowNav';
import AboutNav from './Buttons/AboutNav';
import RecomendationsNav from './Buttons/RecommendationsNav';
import NewProductsNav from './Buttons/NewProductsNav';
import TopWeekNav from './Buttons/TopWeekNav';
import MostValuedNav from './Buttons/MostValueNav';
import UserMenu from './Login/UserMenu';
import SingMenu from './Login/SingMenu';
import ShoppingCart from './Buttons/ShoppingCart';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <ShopNowNav />
            <AboutNav />
            <button onClick={() => scrollToSection('recommendationsSection')} >
            <RecomendationsNav />
            </button>
            <button onClick={() => scrollToSection('newProductsSection')}>
            <NewProductsNav />
            </button>
            <button onClick={() => scrollToSection('topWeekSection')}>
            <TopWeekNav />
            </button>
            <button onClick={() => scrollToSection('mostValuedSection')} className="text-black">
            <MostValuedNav />
            </button>
            <UserMenu />
            <SingMenu/>
            <ShoppingCart />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
