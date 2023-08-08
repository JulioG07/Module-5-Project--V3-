import Icon from "../Components/Icon";
import LogButton from "../Components/LogButton";
import "./Sign.css";

function Sign() {
  return (
    // <body className="fullScreen">
    <div>
      <Icon color="white" />
      <div className="color centerSignin">
        <div className="signBox">
          <h1 id="signIn">Register</h1>
          <LogButton confirm="Create Account" />
        </div>
      </div>
    </div>
    // {/* </body> */}
  );
}

export default Sign;
