import React from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import ProductList from "../productsData";
import Footer from "./footer";
import Profile from "./Profile";

function NavP() {
  return (
    <div>
      <header className="nav-p fix">
        <Nav className="navigation-p">
          <Nav.Link as={NavLink} to="bags" activeClassName="active">
            Bags
          </Nav.Link>
          <Nav.Link as={NavLink} to="dresses" activeClassName="active">
            Dresses
          </Nav.Link>
          <Nav.Link as={NavLink} to="shoes" activeClassName="active">
            Shoes
          </Nav.Link>
          <Nav.Link as={NavLink} to="kitenge" activeClassName="active">
            Kitenge
          </Nav.Link>
        </Nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<ProductList category="dress" />} />
          <Route path="bags" element={<ProductList category="bag" />} />
          <Route path="dresses" element={<ProductList category="dress" />} />
          <Route path="shoes" element={<ProductList category="shoe" />} />
          <Route path="kitenge" element={<ProductList category="kitenge" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default NavP;
