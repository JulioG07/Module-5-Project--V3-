import "./Button.css";
import { Link } from "react-router-dom";
function Button() {
  return (
    <div className="ButtonFormat">
      <div className="test">
        <Link to="/log">
          <button className="Log">Log In</button>
        </Link>
      </div>

      <div className="test">
        <Link to="/sign">
          <button className="Sign">Sign Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Button;
