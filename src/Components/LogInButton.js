import { useState } from "react";
import "./LogInButton.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfg";
import { signInWithEmailAndPassword } from "firebase/auth";

function LogInButton(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser(e) {
    //log the user in
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Sucessfully logged in user");
      navigate("/Main");
    } catch (error) {
      console.error("Failed to login user: ", error);
    }
  }

  return (
    <div className="LogButtonFormat">
      <form onSubmit={loginUser}>
        <input
          type="email"
          className="Info"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="Info"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Info confirmColor"> {props.confirm} </button>
      </form>
    </div>
  );
}

export default LogInButton;
