import React from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

 function View1(props2){
//   const navigate = useNavigate()
//   const handleClick = () => {
//     navigate(`/shopnow/${props2.toview}`)
//   }
  //denanda -welcome
  return (
    <div className="v-flex">
      <div className="vcontainer v-bg">
        <img src={props2.image} alt="" className="small" />
        <div className="info">
        We have the best {props2.info} for all of our customers.Quality that satisfies
        <p>
           <Nav.Link as={Link} to="/shopnow">
             <button className="link-btn">View More</button> 
            </Nav.Link>
            <Routes>
            <Route path="/shopnow" element={props2.toview} />
            </Routes>
            
        </p>
        </div>
      </div>
    </div>
  )
}

export default View1;