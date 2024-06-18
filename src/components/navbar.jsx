import React, { useState } from "react";
import { Alert, Modal, Nav } from "react-bootstrap";
import { Routes, Route, Link, Router } from "react-router-dom";
import Welcome from "./welcome";
import Login from "./Login";
import NavP from "./shopNowNav";
import Products from "../productsNavView";
import Trends from "./trends";
import Footer from "./footer";
import Blog from "./blog";
import ScrollToTop from "./scrollTop";
import Search from "./search";
import Cart from "./cartItems";
import CartQ from "./cartQuantity";


export const Context = React.createContext();

function NavB() {
const[count, setCount] = useState(0);
const [loginObj, setLoginObj] = useState({})
const[openLogin, setOpenLogin] = useState(false)
const handleLogin = (login) => {
  if(login) {
      setLoginObj(login)
  }
  setOpenLogin(prev => !prev)
};

  return (
  
      <div>
        <ScrollToTop />
        <Context.Provider value={[count, setCount]}>
        <header className="nav-b fixed ">
          <div>
            <img src="\images\prishan.jpg" alt="logo" className="logo"/>
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
            <Nav.Link as={Link} to="/shopnow">
              Shop Now
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>   
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>                                                   
            <Search />
            <Cart />
            <span className="cart-count">{count}</span>
            <button 
              type="button" 
              className="btnlogin" 
              onClick={() => handleLogin()}
            >Login</button>
            </Nav>
            
        </header>
        
        <div>
        
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/products" element={<Products />} />  
              <Route path="/shopnow/*" element={ <NavP /> } /> 
              <Route path="/trends" element={<Trends />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Footer />} /> 
              <Route path="/cart" element={<CartQ />} />
            </Routes>
          
        </div>
       
        </Context.Provider>
        <Modal 
           show={openLogin}
           onHide={() => handleLogin()}
           size={""}
           className="modal"
           
         >
          <div className="title">
          <img src="\images\prishan.jpg" alt="logo" className="logo"/>
           <h1>Prishan's Botique</h1> 
          </div>
           <Login />
        </Modal>
      </div>
    
  );
}

export default NavB;
