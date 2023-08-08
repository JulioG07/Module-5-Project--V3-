import "./Dessert-Display.css";

function Cake(props) {
  const cakeStyle = {
    backgroundColor: props.color
  };

  const imageStyle = {
    height: props.imageHeight,
    width: props.imageWidth
  };

  return (
    <div className="card">
      <div className="cake-image">
        <img
          className="ImageStyle"
          style={cakeStyle}
          src={props.image}
          height={props.size}
          alt=" "
        />
      </div>
      <div className="d-format">
        <h3> {props.name} </h3>
        <p className="p-color"> {props.flavor} </p>
      </div>
      <div className="price-button">
        <h2> {props.price} </h2>
        <button className="bottom-format"> {props.button} </button>
      </div>
    </div>
  );
}

export default Cake;
