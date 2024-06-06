import React,{useState} from "react";

function Bags(props){
const[add, setAdd] = useState("Add to cart")
const[background, setBackground] = useState('#dd1245')
const[count, setCount] = useState();

function startCount(){
  setCount(prev => prev + 1)
  if(add === "Add to cart" && background === '#dd1245'){
    setAdd("Added")
    setBackground('rgb(13, 150, 13)')
  }else{
    setAdd("Add to cart")
    setBackground('#dd1245')
    
  } 
}


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
        <button className="btnn" style={{background}} onClick={startCount}>{add}<img src="\images\white-cart3.webp" alt=""  className="cart"/></button>
      </div>
    </div>
  )
}

export default Bags;