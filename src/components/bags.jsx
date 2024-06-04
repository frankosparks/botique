import React from "react";

function Bags(props){
  return (
    <div className="b-container">
      <div className="bag">
        <img src={props.image} alt="" className="bag-image" />
        <h4 className="center">{props.name}</h4>
        <p className="d-price">{props.d_price}</p>
        <p className="price">
          <span className="red">{props.price_red}</span>
          <span className="green">{props.green}</span> 
        </p>
        <button className="btnn">Add to cart <img src="\images\las-last.jpg" alt=""  className="cart"/></button>
      </div>
    </div>
  )
}

export default Bags;