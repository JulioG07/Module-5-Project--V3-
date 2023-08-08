import "./styles.css";
import { Link, Routes, Route } from "react-router-dom";

import Log from "./Pages/Log";
import Sign from "./Pages/Sign";
import Layout from "./Pages/Layout";
import Icon from "./Components/Icon";
import Main from "./Pages/Main";
import ShopCart from "./Pages/ShopCart";
import AboutMe from "./Pages/AboutMe";
import Profile from "./Pages/Profile";
import CakePage from "./Pages/CakePage";
import CupCakePage from "./Pages/CupCakePage";
import CookiePage from "./Pages/CookiePage";
import DulcePage from "./Pages/DulcePage";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import CartProvider from "./CartContext";

import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      {/* <Icon /> */}
      <CartProvider>
        <Routes>
          <Route index element={<Header />} />
          <Route path="log" element={<Log />} />
          <Route path="sign" element={<Sign />} />
          <Route path="main" element={<Main />} />
          <Route path="ShopCart" element={<ShopCart />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="CakePage" element={<CakePage />} />
          <Route path="CupCakePage" element={<CupCakePage />} />
          <Route path="DulcePage" element={<DulcePage />} />
          <Route path="CookiePage" element={<CookiePage />} />
          <Route path="Success" element={<Success />} />
          <Route path="Cancel" element={<Cancel />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
