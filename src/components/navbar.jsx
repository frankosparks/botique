import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./welcome";
import App from "../App";

function NavB() {

const[count, setCount] = useState(0);

function startCount(){
  setCount(prev => prev + 1)
}

  return (
  
      <div>
        <header className="nav fixed">
          <div>
            <img src="\images\sas.png" alt="logo" className="logo"/>
            <span className="Rapp">Prishan's Botique</span>
          </div>

          <Nav className="navigation">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/trends">
              Trends
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/shop Now">
              Shop Now
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <img src="\images\pink-shopping-cart-icon-17.gif" alt="" className="cart" />
            <span className="cart-count">{count}</span>
            <button className="btnlogin">Login</button>
            </Nav>
            
        </header>
        <div>
        
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/products" element={<App />} />
            </Routes>
          
        </div>
      </div>
    
  );
}

export default NavB;
