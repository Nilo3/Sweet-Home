import { useState } from "react";
import { useAuth } from "../../context/authContex";
import { useNavigate, Link } from "react-router-dom";
import ShopNowNav from "./Buttons/ShopNowNav";
import AboutNav from "./Buttons/AboutNav";
import RecomendationsNav from "./Buttons/RecommendationsNav";
import Inspiration from "./Buttons/Inspiration";
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
  const handleSelect = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleProfileClick = () => {
    if (user === null) {
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAbout = () => {
    navigate("/about");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShopNow = () => {
    navigate("/products");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHome = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShoppingCart = () => {
    navigate("/checkout");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 w-full bg-white z-50 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row flex-wrap items-center justify-between gap-3 md:gap-0">
            <button onClick={handleHome}>
              <Logo className="order-first" />
            </button>
            <div className="hidden md:flex md:flex-wrap md:items-center md:gap-3"> 
              <div onClick={handleShopNow}>
                <ShopNowNav />
              </div>
              <div onClick={handleAbout}>
                <AboutNav />
              </div>
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
              <button onClick={handleShoppingCart}>
                <ShoppingCart />
              </button>
            </div>
            <div className="flex-row items-center gap-3">
              <div
                onClick={handleProfileClick}
                className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
              >
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
                        alt={user.displayName}
                        className="rounded-full w-8 h-8"
                      />
                    )}
                    <div className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 cursor-pointer">
                      <h1 className="text-sm md:text-base">
                        Hi {user.displayName || user.email}
                      </h1>
                    </div>
                  </>
                ) : (
                  <LoginNav />
                )}
                <div className="hidden md:block cursor-pointer select-none">
                  {user ? null : <RegisterNav />}
                </div>
              </div>
              {isMenuOpen && (
                <div className="absolute bg-white py-2 mt-1 w-48 right-0 shadow-md">
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/purchases"
                      onClick={handleSelect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Purchases
                    </Link>
                    <Link
                      to="/reviews"
                      onClick={handleSelect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Reviews
                    </Link>
                    <Link
                      to="/favorites"
                      onClick={handleSelect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Favorites
                    </Link>
                    <Link
                      to="/my_profile"
                      onClick={handleSelect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-600"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*EN CASO DE DEJARLO CON LA MISMA FUNCIONALIDAD DEL DESPLIEGUE DEL PERFIL, ELIMINAR. ATT: NACHO*/}
          <div className="md:hidden flex items-center">
            <CgMenuRound
              className="text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
