import React, { useState, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxExit } from "react-icons/rx";
import { AiFillIdcard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfg";
import { useEffect } from "react";

function Navbar() {
  // const menuRef = useRef(null); // Create a ref to the menu element
  const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  async function LogOutUser() {
    try {
      await signOut(auth);
      navigate("/");
      console.log("logged out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  useEffect(() => {
    // Add or remove the "dimmed" class to the body based on the sidebar state
    document.body.classList.toggle("dimmed", sidebar);
  }, [sidebar]);

  return (
    <>
      <IconContext.Provider value={{ color: "#f5f5f5" }}>
        <div className={`navbar {sidebar ? "dimmed" : ""}`}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={() => setSidebar(!sidebar)} />
          </Link>
        </div>
        {/* OVER LAY  */}
        <div
          className={sidebar ? "overlay active" : "overlay"}
          onClick={() => setSidebar(false)}
        ></div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={() => setSidebar(!sidebar)} />
              </Link>
            </li>
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
            <li className="nav-text">
              <Link to="/Main">
                {" "}
                <FaHome className="nav-icon" /> Home
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/ShopCart">
                {" "}
                <FaShoppingCart className="nav-icon" />
                Shop Cart
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/Profile">
                {" "}
                <CgProfile className="nav-icon" />
                Profile
              </Link>
            </li>

            <button className="nav-text nav-button" onClick={LogOutUser}>
              {" "}
              <RxExit id="nav-iconI" /> Log Out{" "}
            </button>

            <li className="nav-text">
              <Link to="/AboutMe">
                {" "}
                <AiFillIdcard className="nav-icon" />
                About Me
              </Link>
            </li>
            {/* test */}
            <li className="nav-text">
              <Link to="/Success">
                {" "}
                <AiFillIdcard className="nav-icon" />
                success
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
