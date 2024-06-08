import React from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Dress from "../Dresses";
import Shoe from "../Shoes";
import Kitengee from "../Kitenge";


function NavP() {

  return (
  
      <div>
        <div className="nav-p fix">
          <Nav className="navigation-p">
            <Nav.Link as={Link} to="/bags">
              Bags
            </Nav.Link>
            <Nav.Link as={Link} to="/dresses">
              Dresses
            </Nav.Link>
            <Nav.Link as={Link} to="/shoes">
              Shoes
            </Nav.Link>
            <Nav.Link as={Link} to="/kitenge">
              Kitenge
            </Nav.Link>

            </Nav>
            
        </div>
        
        <div>
        
            <Routes>
              <Route exact path="/bags" element={<App />} />
              <Route path="/dresses" element={<Dress />} />    
              <Route path="/shoes" element={<Shoe />} /> 
              <Route path="/kitenge" element={<Kitengee />} /> 
            </Routes>
          
        </div>
       
        
       
      </div>
    
  );
}

export default NavP;
