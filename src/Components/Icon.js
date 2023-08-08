import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Icon.css";

function Icon(props) {
  const iconColor = {
    color: props.color
  };

  return (
    <div className="homeIcon">
      <Link to="/">
        <h1 style={iconColor}>
          {" "}
          <FaHome />
        </h1>
      </Link>
    </div>
  );
}

export default Icon;
