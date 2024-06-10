import React from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import App from "../App";
import Dress from "../Dresses";
import Shoe from "../Shoes";
import Kitengee from "../Kitenge";


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
              <Route exact path="/" element={<App />} />
              <Route path="bags" element={<App />} />
              <Route path="dresses" element={<Dress />} />    
              <Route path="shoes" element={<Shoe />} /> 
              <Route path="kitenge" element={<Kitengee />} /> 
            </Routes>
          
        </div>
       
        
       
      </div>
    
  );
}

export default NavP;
