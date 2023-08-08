import "./Title.css";
// import {IoLocationSharp} from "react-icons/fa";

function Title(props) {
  return (
    <div className="TitleI">
      <h1 className="TitleII">{props.title}</h1>
      <h4 className="TitleIII">
        {props.icon} {props.location}
      </h4>
      {/* <IoLocationSharp/> */}
    </div>
  );
}

export default Title;
