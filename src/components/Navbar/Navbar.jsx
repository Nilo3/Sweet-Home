import { useState } from "react";
import { useAuth } from "../../context/authContex";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import Container from "./Container";
import ShopNowNav from "./Buttons/ShopNowNav";
import AboutNav from "./Buttons/AboutNav";
import RecomendationsNav from "./Buttons/RecommendationsNav";
import NewProductsNav from "./Buttons/NewProductsNav";
import TopWeekNav from "./Buttons/TopWeekNav";
import MostValuedNav from "./Buttons/MostValueNav";
import ShoppingCart from "./Buttons/ShoppingCart";
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
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
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
              <button onClick={() => scrollToSection("recommendationsSection")}>
                <RecomendationsNav />
              </button>
              <button onClick={() => scrollToSection("newProductsSection")}>
                <NewProductsNav />
              </button>
              <button onClick={() => scrollToSection("topWeekSection")}>
                <TopWeekNav />
              </button>
              <button
                onClick={() => scrollToSection("mostValuedSection")}
                className="text-black"
              >
                <MostValuedNav />
              </button>
              <ShoppingCart />
              <div className="relative">
                <div className="flex flex-row items-center gap-3">
                  <div
                    className="
                      p-4
                      md:py-1
                      md:px-2
                      border-[1px]
                      flex
                      flex-row
                      items-center
                      gap-3
                      rounded-full
                      cursor-pointer
                      hover:shadow-md
                      transition
                    "
                  >
                    <BiLogOutCircle
                      onClick={handleLogout}
                      className="text-2xl"
                    />
                    <div className="hidden md:block">
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <CgMenuRound className="text-2xl" />
            </button>
          </div>
        </Container>
      </div>
      {isMenuOpen && (
        <div className="menu-hamburguesa absolute top-[100%] right-0 mt-2 py-2 px-4 shadow-md">
          <LoginNav />
          <br />
          <RegisterNav />
        </div>
      )}
    </div>
  );
}

export default Navbar;
