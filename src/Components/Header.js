import "./Header.css";
import Title from "./Title";
import Button from "./Button";
import Home from "./Images/homeCook.png";
import Icon from "./Icon";

function Header() {
  return (
    <div className="homeColor">
      <Icon color="#ff8243" />
      <Button />

      <div className="Space"></div>
      <div className="homeLogo">
        <img
          className="imgStyle"
          src="https://img.freepik.com/free-vector/bakery-logo-food-business-template-branding-design-vector_53876-136255.jpg?w=1060&t=st=1686334907~exp=1686335507~hmac=0f3aeedb5ef25cb3decd1b2f71ef5bc895797121a894659652088ab1018f00e6"
          alt=""
        />
      </div>
      <h1 className="mainTitle"> Goitia's Bake Shop </h1>
    </div>
  );
}

export default Header;
