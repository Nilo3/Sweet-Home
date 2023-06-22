import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ShopNowNav from "./Buttons/ShopNowNav";
import AboutNav from "./Buttons/AboutNav";
import RecomendationsNav from "./Buttons/RecommendationsNav";
import Inspiration from "./Buttons/inspiration";
import TopWeekNav from "./Buttons/TopWeekNav";
import MostValuedNav from "./Buttons/MostValueNav";
import ShoppingCart from "./Buttons/ShoppingCart";
import LogoutNav from "./Buttons/LogOutNav";
import LoginNav from "./Buttons/LoginNav";
import RegisterNav from "./Buttons/RegisterNav";
import Logo from "./Logo/Logo";
import { CgMenuRound } from "react-icons/cg";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleRecommendationsClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("recommendationsSection");
      }, 500);
    } else {
      scrollToSection("recommendationsSection");
    }
  };

  const handleInspirationClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("inspirationSection");
      }, 500);
    } else {
      scrollToSection("inspirationSection");
    }
  };

  const handleTopWeekClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("topWeekSection");
      }, 500);
    } else {
      scrollToSection("topWeekSection");
    }
  };
  const handleMostValuedClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("mostValuedSection");
      }, 500);
    } else {
      scrollToSection("mostValuedSection");
    }
  };

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm ">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo className="order-first" />
            <div className="hidden md:flex md:flex-row md:items-center md:gap-3">
              <ShopNowNav />
              <AboutNav />
              <div onClick={handleRecommendationsClick}>
                <RecomendationsNav />
              </div>
              <div onClick={handleInspirationClick}>
                <Inspiration />
              </div>
              <div onClick={handleTopWeekClick}>
                <TopWeekNav />
              </div>
              <div onClick={handleMostValuedClick}>
                <MostValuedNav />
              </div>
              <ShoppingCart />
              <div className="relative">
                <div className="flex flex-row items-center gap-3"></div>
              </div>
            </div>
            <button title="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <CgMenuRound className="text-3xl" />
            </button>
          </div>
        </Container>
      </div>
      {isMenuOpen && (
        <div className="menu-hamburguesa absolute top-[100%] right-0 mt-2 py-2 px-4 shadow-inherit">
          <LoginNav />
          <br />
          <RegisterNav />
          <br />
          <LogoutNav />
        </div>
      )}
    </div>
  );
}

export default Navbar;
