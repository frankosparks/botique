import React from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Footer from "./footer";

function Trends(){
  return(
 <div >
  <h1 className="h p_g center">TRENDING THIS WEEK</h1>
  <div className="trending vcontainer">
    <div className="t-info center">
      <h3 className="h_pink ">Latest Outfits</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae tempora ullam quibusdam delectus, molestiae voluptatum asperiores aliquid modi itaque omnis, sit, animi qui. Id excepturi, iste, tenetur porro explicabo quos ipsa aspernatur laboriosam voluptates libero inventore tempore ad ut cupiditate itaque totam eligendi atque, sapiente consectetur omnis accusamus repellendus veritatis alias? Sint, expedita neque? Iste, dignissimos harum! Vero animi ex enim voluptatem sequi consequuntur amet tempora accusamus officiis et quibusdam asperiores earum sit ipsam doloribus consequatur ratione provident tempore dicta, voluptates hic mollitia! Libero rerum iste alias repellat magni.</p>

               <Nav.Link as={Link} to="/shopnow">
                  <button className="shop-btn">View More</button> 
                </Nav.Link>
                <Routes>
                  <Route path="/shopnow" element={<App/>} />
                </Routes>

    </div>
    <div className="t-images">
      <div className="over">
      <img src="\images\wear3.jpg" alt="" className="t-img trans"/>
      </div>
      <div className="over">
      <img src="\images\wear4.jpg" alt="" className="t-img trans"/>
      </div>
      
    </div>
  </div>
  <Footer />
 </div>
  )
}

export default Trends;