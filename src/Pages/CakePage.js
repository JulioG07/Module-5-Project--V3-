import { Link } from "react-router-dom";
import BackIcon from "../Components/BackIcon"; // Update the import path
import "./CakePage.css";

//PROPS
import Cake from "../Components/Cake";

//MENU PICTURES
import TresLeches from "../Components/Images/TresLeches.png";
import TortaSelvaNegra from "../Components/Images/TortaSelvaNegra.png";
import TortaPina from "../Components/Images/TortaPina.png";

function CakePage(props) {
  return (
    <div>
      <div className="cake-header">
        <h3>
          <BackIcon />
        </h3>
      </div>
      <div className="popularFormat space-top">
        <Cake
          size="100"
          image={TresLeches}
          name="Tres Leches Cake"
          flavor="Flavor: Milk"
          price="$20"
          button="+"
        />

        <Cake
          size="100"
          image={TortaSelvaNegra}
          name="Selva Negra Cake"
          flavor="Flavor: Chocolate & Vainilla "
          price="$25"
          button="+"
        />

        <Cake
          size="100"
          image={TortaPina}
          name="Torta de Piña"
          flavor="Flavor: Caramel & Pinnaple"
          price="$25"
          button="+"
        />
      </div>
      <div className="popularFormat space-top-additional">
        <Cake
          size="100"
          image={TresLeches}
          name="Tres Leches Cake"
          flavor="Flavor: Milk"
          price="$20"
          button="+"
        />

        <Cake
          size="100"
          image={TresLeches}
          name="Tres Leches Cake"
          flavor="Flavor: Milk"
          price="$20"
          button="+"
        />

        <Cake
          size="100"
          image={TresLeches}
          name="Tres Leches Cake"
          flavor="Flavor: Milk"
          price="$20"
          button="+"
        />
      </div>
    </div>
  );
}

export default CakePage;
