import { useState } from "react";
import { useAuth } from "../../context/authContex";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ShopNowNav from "./Buttons/ShopNowNav";
import AboutNav from "./Buttons/AboutNav";
import RecomendationsNav from "./Buttons/RecommendationsNav";
import Inspiration from "./Buttons/inspiration";
import TopWeekNav from "./Buttons/TopWeekNav";
import MostValuedNav from "./Buttons/MostValueNav";
import ShoppingCart from "./Buttons/ShoppingCart";
import LoginNav from "./Buttons/LoginNav";
import RegisterNav from "./Buttons/RegisterNav";
import Logo from "./Logo/Logo";
import { CgMenuRound } from "react-icons/cg";
import userPlaceholder from "../../assets/image/person-placeholder-400x400.png";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="fixed w-full bg-white z-10 shadow-sm">
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
              <button onClick={handleInspirationClick}>
                <Inspiration />
              </button>
              <button onClick={handleTopWeekClick}>
                <TopWeekNav />
              </button>
              <button onClick={handleMostValuedClick}>
                <MostValuedNav />
              </button>
              <ShoppingCart />
            </div>
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                  {user ? (
                    <>
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="User Profile"
                          className="rounded-full w-8 h-8"
                        />
                      ) : (
                        <img
                          src={userPlaceholder}
                          alt="User Placeholder"
                          className="rounded-full w-8 h-8"
                        />
                      )}
                      <h1>Hi {user.displayName || user.email}</h1>
                    </>
                  ) : (
                    <LoginNav />
                  )}
                  <div className="hidden md:block cursor-pointer select-none">
                    {user ? (
                      <button onClick={handleLogout}>Logout</button>
                    ) : (
                      <RegisterNav />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <CgMenuRound
              className="text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </Container>
      </div>
      {isMenuOpen && (
        <div className="bg-white py-2">
          <Container>
            <div className="flex flex-col items-center gap-2">
              <ShopNowNav
                mobileMenu={true}
                onClick={() => setIsMenuOpen(false)}
              />
              <AboutNav
                mobileMenu={true}
                onClick={() => setIsMenuOpen(false)}
              />
              <RecomendationsNav
                mobileMenu={true}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleRecommendationsClick();
                }}
              />
              <Inspiration
                mobileMenu={true}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleInspirationClick();
                }}
              />
              <TopWeekNav
                mobileMenu={true}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleTopWeekClick();
                }}
              />
              <MostValuedNav
                mobileMenu={true}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleMostValuedClick();
                }}
              />
              {user ? (
                <>
                  <button
                    className="font-medium text-gray-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <LoginNav
                    mobileMenu={true}
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <RegisterNav
                    mobileMenu={true}
                    onClick={() => setIsMenuOpen(false)}
                  />
                </>
              )}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Navbar;
