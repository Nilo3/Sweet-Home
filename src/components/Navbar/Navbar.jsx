
import React from 'react';

import ShopNowNav from "./Buttons/ShopNowNav"
import AboutNav from "./Buttons/AboutNav";
import RecomendationsNav from "./Buttons/RecommendationsNav";
import NewProductsNav from "./Buttons/NewProductsNav";
import TopWeekNav from "./Buttons/TopWeekNav";
import MostValuedNav from "./Buttons/MostValueNav";
import UserMenu from "./Login/UserMenu";
import ShoppingCart from "./Buttons/ShoppingCart";
import Container from './Container';



function Navbar () {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-1 
          border-b-[1px]
        "
      >
        <Container>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
           
            <ShopNowNav />
            <AboutNav />
            <RecomendationsNav />
            <NewProductsNav />
            <TopWeekNav />
            <MostValuedNav />
            <UserMenu />
            <ShoppingCart />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;