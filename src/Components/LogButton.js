import { useState } from "react";
import { auth, db } from "../firebaseConfg";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./LogButton.css";

function Signup(props) {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();

    try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //get the user
      const user = userCredential.user;

      //add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
      });

      // redirect to profile page
      navigate("/Main");
    } catch (error) {
      console.error("Error in Registration: ", error.message);
    }
  }

  return (
    <div className="LogButtonFormat">
      <form onSubmit={registerUser}>
        <input
          placeholder="Username"
          className="Info"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Email"
          className="Info"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Create Password"
          className="Info"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Info confirmColor"> {props.confirm} </button>
      </form>
    </div>
  );
}

export default Signup;
