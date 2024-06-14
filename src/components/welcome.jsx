import React from "react";
import Home from "../home";
import ProductList from "../productsData";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./footer";

function Welcome(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if(hours < 12){
    timeOfDay = "morning"
  }
  else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
  }
  else if(hours >= 17 && hours < 20){
    timeOfDay = "evening"
  }
  else{
    timeOfDay = "night"
  }

  return(
    <div className="discount">
      <div className="vcontainer half-bg">
        <div className="welcome">
          <h1 className="c_b">Good {timeOfDay}, welcome and shop with us &#129303;.</h1>
          <h2 className="c_b">Feel Youself a new</h2>
          <p className="align c_b">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, illo hic delectus nisi corrupti voluptates rerum veritatis vel vero pariatur. Numquam incidunt excepturi libero perspiciatis provident sed quisquam natus omnis?</p>
          <p className="align c_b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas!</p>

          <div>{<Home />}</div>

        </div>
        <img src="\images\sas.png" alt="" className="madam"/>
      </div>
      <div className="cont-disc vcontainer">
      <img src="\images\group.png" alt="" className="disc-img"/>
        <div className="disc">
          <h1 className="pink-h1">10% discount off</h1>
          <h2 className="white">Get this offer today</h2>
          <p className="c_b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro officiis temporibus recusandae odio, libero incidunt quibusdam enim sit fugit.</p>
          <Nav.Link as={Link} to="/shopnow">
            <button className="shop-btn">Shop Now</button> 
          </Nav.Link>
              <Routes>
              <Route path="bags" element={<ProductList category="bag" />} />
              </Routes>
              
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Welcome;