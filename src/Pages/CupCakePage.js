import { Link } from "react-router-dom";
import "./CupCake.css";
import BackIcon from "../Components/BackIcon";

//PROPS
import Cupcake from "../Components/Cupcake";

//MENU IMAGES
import OreoCupCake from "../Components/Images/OreoCupCake.png";
import BlueberryCupCake from "../Components/Images/BlueberryCupCake.png";
import CornCupCake from "../Components/Images/CornCupCake.png";

function CupCakePage(props) {
  return (
    <div>
      <div className="cupcake-header">
        <h3>
          <BackIcon />
        </h3>
      </div>

      <div className="popularFormat space-top">
        <Cupcake
          size="100"
          image={OreoCupCake}
          name="Oreo Cupcake"
          flavor="Flavor: Oreo"
          price="$13 for 15"
          button="+"
        />
        <Cupcake
          size="100"
          image={BlueberryCupCake}
          name="Blueberry Cupcake"
          flavor="Flavor: Blueberry"
          price="$13 for 15"
          button="+"
        />
        <Cupcake
          size="100"
          image={CornCupCake}
          name="Corn Cupcake"
          flavor="Flavor: Corn"
          price="$12 for 15"
          button="+"
        />
      </div>

      <div className="popularFormat space-top-additional">
        <Cupcake
          size="100"
          image={OreoCupCake}
          name="Oreo Cupcake"
          flavor="Flavor: Oreo"
          price="$13 for 15"
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
      </div>
    </div>
  );
}

export default CupCakePage;
