import React from "react";

function Bags(props){
  
  let discountAmount = props.price_red - props.d_price;
  let discountPercentage = (discountAmount / props.price_red) * 100;
  return (
    <div className="b-container">
      <div className="bag">
        <img src={props.image} alt="" className="bag-image" />
        <h4 className="center">{props.name}</h4>
        <p className="d-price">Ksh{props.d_price}</p>
        <p className="price">
          <span className="red">Ksh{props.price_red}</span>
          <span className="green">{discountPercentage.toFixed(1)}%</span> 
        </p>
        <button className="btnn">Add to cart <img src="\images\las-last.jpg" alt=""  className="cart"/></button>
      </div>
    </div>
  )
}

export default Bags;