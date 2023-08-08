import { Link } from "react-router-dom";
import "./DulcePage.css";
import BackIcon from "../Components/BackIcon";

//PROPS
import Dulce from "../Components/Dulce";

//MENU IMAGES
import ConservaLeche from "../Components/Images/ConservaLeche.png";

function DulcePage(props) {
  return (
    <div>
      <div className="dulce-header">
        <h3>
          <BackIcon />
        </h3>
      </div>

      <div className="popularFormat space-top">
        <Dulce
          size="100"
          image={ConservaLeche}
          name="Conserva De Leche"
          flavor="Flavor: Dulce de leche"
          price="10$ for 15"
          button="+"
        />
        <Dulce
          size="100"
          image={ConservaLeche}
          name="Conserva De Leche"
          flavor="Flavor: Dulce de leche"
          price="10$ for 15"
          button="+"
        />
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

export default DulcePage;
