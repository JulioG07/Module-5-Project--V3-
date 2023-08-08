// import Icon from "../Components/Icon";
import "./Main.css";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import CakeIcon from "../Components/Images/CakeIcon.png";
import CupCakeIcon from "../Components/Images/CupCakeIcon.png";
import DulceIcon from "../Components/Images/DulceIcon.png";
import CookieIcon from "../Components/Images/CookieIcon.png";
import Chef from "../Components/Images/Chef.png";

// import { FaLocationDot } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMenuCake } from "react-icons/cg";

// Popular List Imports
import Cake from "../Components/Cake";
import Cookie from "../Components/Cookie";
import Cupcake from "../Components/Cupcake";
import Dulce from "../Components/Dulce";

// Images
import TresLeches from "../Components/Images/TresLeches.png";
import SugarCookies from "../Components/Images/SugarCookies.png";
import OreoCupCake from "../Components/Images/OreoCupCake.png";
import ConservaLeche from "../Components/Images/ConservaLeche.png";

function Main() {
  return (
    <div className="Home">
      <Navbar />

      <div className="topTitle">
        <div id="T-Q">
          <Title src="icons8-location-50" location="Norwalk, CT" />
          <h1 className="TitleIII Title"> What would your like to eat? </h1>
        </div>
        <div className="image-1">
          <img src={Chef} height="350" />
        </div>
      </div>

      <div>
        <h2 className="Space testCT"> Discover by category </h2>
      </div>

      <div className="categories">
        <div className="cgFormat">
          <div className="Cake">
            <Link to="/CakePage">
              <img src={CakeIcon} height="50" />
            </Link>
            <p className="pp">Cake</p>
          </div>
          <div className="CupCake">
            <Link to="/CupCakePage">
              <img src={CupCakeIcon} height="50" />
            </Link>
            <p className="pp">Cup Cake</p>
          </div>
          <div className="Dulce">
            <Link to="/DulcePage">
              <img src={DulceIcon} height="50" />
            </Link>
            <p className="pp">Dulce</p>
          </div>
          <div className="Cookie">
            <Link to="/CookiePage">
              <img src={CookieIcon} height="50" />
            </Link>
            <p className="pp">Cookies</p>
          </div>
        </div>
      </div>

      <h2 className="testCT testCT-2 testCT-3"> Popular Desserts </h2>

      <div className="popularFormat ">
        <Cake
          // color="#ffc0cb"
          size="100"
          image={TresLeches}
          name="Tres Leches Cake"
          flavor="Flavor: Milk"
          price="$20"
          button="+"
        />

        <Cupcake
          size="100"
          image={OreoCupCake}
          name="Oreo Cupcake"
          flavor="Flavor: Oreo"
          price="$13 for 15"
          button="+"
        />

        <Cookie
          size="100"
          image={SugarCookies}
          name="Sugar Cookies "
          flavor="Flavor: Sugar"
          price="$10 for 15 "
          button="+"
        />
      </div>
      <div className="popularFormat space-top-additional">
        <Dulce
          size="100"
          image={ConservaLeche}
          name="Conserva De Leche"
          flavor="Flavor: Dulce de leche"
          price="10$ for 15"
          button="+"
        />
      </div>
    </div>
  );
}

export default Main;
