// import Icon from "../Components/Icon";
import "./ShopCart.css";
import { productsArray } from "../productStore";
import Navbar from "../Components/Navbar";
import ShopNavbar from "../Components/ShopNavbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "../Pages/Cancel";
import Success from "../Pages/Success";
// THIS BOOTSTRAP CSS EFFECTS ALL CODE
// 🚨 we must change this later on 🚨
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";

function ShopCart() {
  return (
    <div className="ShopCart">
      <Navbar />

      <Container>
        <ShopNavbar></ShopNavbar>
      </Container>
      <h1 align="center" className="p-3">
        {" "}
        Welcome to the store!{" "}
      </h1>
      <Row xs={1} md={7} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShopCart;
