import React, { useState } from "react";
import { Alert, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./welcome";
import App from "../App";
import Login from "./Login";
import { Modal } from "react-bootstrap";

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
        <Context.Provider value={[count, setCount]}>
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
            <img src="\images\pink-shopping-cart-icon-17.gif" alt="" className="cart"/>
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
              <Route path="/products" element={<App />} />    
            </Routes>
          
        </div>
       
        </Context.Provider>
        <Modal 
           show={openLogin}
           onHide={() => handleLogin()}
           size={""}
         >
          <div className="title">
            Login
          </div>
           <Login />
        </Modal>
      </div>
    
  );
}

export default NavB;
