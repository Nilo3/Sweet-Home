import Container from "../container"
import React from 'react';
import Logo from "./Logo"
import ShopNowNav from "../../views/ShopNow/ShopNowNav";
import AboutNav from "../../views/About/AboutNav";
import RecomendationsNav from "../../Components/Recommendations/RecomendationsNav";
import NewProductsNav from "../../views/NewProducts/NewProductsNav";
import TopNav from "../../views/Top/TopNav";
import MostValuedNav from "../../Components/MostValued/MostValuedNav";
import UserMenu from "../../views/UserMenu";
import ShoppingCart from "../../views/ShoppingCart/ShoppingCart";

const Navbar: React.FC = () => {
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
            <Logo />
            <ShopNowNav />
            <AboutNav />
            <RecomendationsNav />
            <NewProductsNav />
            <TopNav />
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
