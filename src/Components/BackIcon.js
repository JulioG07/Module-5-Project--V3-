import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./BackIcon.css";
import { IconContext } from "react-icons/lib";

function BackIcon() {
  return (
    <IconContext.Provider value={{ color: "white", size: "60px" }}>
      <div className="back-icon-dec">
        <Link to="/Main">
          <h1>
            {" "}
            <BsArrowLeft />
          </h1>
        </Link>
      </div>
    </IconContext.Provider>
  );
}

export default BackIcon;
