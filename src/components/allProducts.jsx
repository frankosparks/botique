import React,{useState, useContext} from "react";
import { Context } from "./navbar";
import CustomAlert from "./timeout";

function Product(props){
const[showAlert, setshowAlert]= useState("")
const[count, setCount] = useContext(Context)
const[add, setAdd] = useState("Add to cart")
const[background, setBackground] = useState('#dd1245')
const [inCart, setInCart] = useState(
  JSON.parse(localStorage.getItem('cart'))?.some(item => item.id === props.id) || false
);

function startCount(){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if(add === "Add to cart" && background === '#dd1245'){
    localStorage.setItem('cart', JSON.stringify(cart));
    setAdd("Added")
    setBackground('rgb(13, 150, 13)')
    setCount(prev => prev + 1)
    setshowAlert("Added to Cart");
    cart.push(props);
    
  }else{
    setAdd("Add to cart")
    setBackground('#dd1245')
    setCount(prev => prev - 1)
    setshowAlert("Removed from Cart");
    cart = cart.filter(item => item.id !== props.id);
  } 
  localStorage.setItem('cart', JSON.stringify(cart));
  setInCart(!inCart); 
}

const closeAlert = () => {
  setshowAlert("");
};

let discountAmount = props.price_red - props.d_price;
  let discountPercentage = (discountAmount / props.price_red) * 100;
  return (
    <div className="b-container">
       {showAlert && <CustomAlert message={showAlert} onClose={closeAlert} />}
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

export default Product;