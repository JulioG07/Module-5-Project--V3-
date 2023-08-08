import Icon from "../Components/Icon";
import LogInButton from "../Components/LogInButton";
import "./Sign.css";

function Log() {
  return (
    <div>
      <Icon color="white" />

      <div className="color centerSignin">
        <div className="signBox">
          <h1 id="signIn">Welcome Back!</h1>
          <LogInButton confirm="Log In" />
        </div>
      </div>
    </div>
  );
}

export default Log;
