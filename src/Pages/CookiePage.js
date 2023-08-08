import { Link } from "react-router-dom";
import "./CookiePage.css";
import BackIcon from "../Components/BackIcon";

//PROPS
import Cookie from "../Components/Cookie";

//MENU IMAGES
import SugarCookies from "../Components/Images/SugarCookies.png";

function CookiePage(props) {
  return (
    <div>
      <div className="cookie-header">
        <h3>
          <BackIcon />
        </h3>
      </div>
      <div className="popularFormat space-top">
        <Cookie
          size="100"
          image={SugarCookies}
          name="Sugar Cookies "
          flavor="Flavor: Sugar"
          price="$10 for 15 "
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

        <Cookie
          size="100"
          image={SugarCookies}
          name="Sugar Cookies "
          flavor="Flavor: Sugar"
          price="$10 for 15 "
          button="+"
        />
      </div>

      <div className="popularFormat space-top">
        <Cookie
          size="100"
          image={SugarCookies}
          name="Sugar Cookies "
          flavor="Flavor: Sugar"
          price="$10 for 15 "
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
    </div>
  );
}

export default CookiePage;
