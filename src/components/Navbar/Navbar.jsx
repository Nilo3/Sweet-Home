import React from 'react';
import Container from './Container';
import ShopNowNav from './Buttons/ShopNowNav';
import AboutNav from './Buttons/AboutNav';
import RecomendationsNav from './Buttons/RecommendationsNav';
import NewProductsNav from './Buttons/NewProductsNav';
import TopWeekNav from './Buttons/TopWeekNav';
import MostValuedNav from './Buttons/MostValueNav';
import ShoppingCart from './Buttons/ShoppingCart';
import {useAuth} from '../../context/authContex'
import {useNavigate} from 'react-router-dom';
import {BiLogOutCircle} from 'react-icons/bi'
import LoginNav from './Buttons/LoginNav';
import RegisterNav from './Buttons/RegisterNav';
import Logo from  './Logo/Logo'

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();
  const {logout} = useAuth()

  const handleLogout = async () => {
    try{
    await logout();
    navigate('/login');
    }catch{error}{
    console.log(error);
    }
  }
   
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo className="order-first" />
            <ShopNowNav />
            <AboutNav />
            <button onClick={() => scrollToSection('recommendationsSection')}>
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
            <ShoppingCart />
            <LoginNav/>
            <RegisterNav/>
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
                  <BiLogOutCircle  />
                  <div className="hidden md:block">
                    <button onClick={handleLogout}>
                    Logout
                    </button>
                 </div>
                 </div>
                </div>
            </div>         
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;

