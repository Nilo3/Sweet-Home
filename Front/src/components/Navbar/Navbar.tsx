import Container from "../container";
import Logo from "./Logo"
import ShopNow from "../../views/ShopNow/ShopNow";
import About from "../../views/About/About";
import Recomendations from "../../views/Recomendations/Recomendations";
import NewProducts from "../../views/NewProducts/NewProducts";
import Top from "../../views/Top/Top";
import MostValued from "../../views/MostValued/MostValued";
import UserMenu from "../../views/UserMenu";
import ShoppingCart from "../../views/ShoppingCart/ShoppingCart";

const Navbar = () => {
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
             <ShopNow/>
             <About/>
             <Recomendations/>
             <NewProducts/>
             <Top/>
             <MostValued/>
             <UserMenu/>
             <ShoppingCart/>
            </div>
          </Container>
        </div>
       
      </div>
      );
    }
    

export default Navbar
