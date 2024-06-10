import React from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function View2(props3){
  
  return (
    <div>
      
      <div className="vcontainer p_g">
      
            <div >
              <hr />
              <div className="p-images">
                <img src={props3.image1} alt="" className="thumbs" />
                <img src={props3.image2} alt="" className="thumbs" />
              </div>
            </div>
          
            <div className="about p_w">
              <h1 className="h_pink">Women {props3.about} collection</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellendus nulla vitae consequatur deserunt ad illo magni ducimus, natus repellat minus sequi maxime quisquam facilis? Hic, nostrum explicabo iure ipsum maxime itaque deleniti ipsam sequi nobis? Esse ducimus accusantium illum quasi voluptatibus quod sed minus quibusdam doloribus nulla praesentium reiciendis eum officia iure inventore ipsum obcaecati iusto earum maiores, saepe voluptates incidunt exercitationem vel! Omnis nostrum doloremque enim aut architecto veritatis? Ratione totam laudantium quis!</p>
              <p>
                <Nav.Link as={Link} to="/shopnow">
                  <button className="shop-btn">View More</button> 
                </Nav.Link>
                <Routes>
                  <Route path="/shopnow" element={props3.toview} />
                </Routes>
                  
              </p>
              <hr />
            </div>
      </div>
     </div>
  )
}

export default View2;