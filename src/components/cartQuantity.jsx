import React from "react";
import { useState, useEffect } from "react";

function CartQ(){
  const[cartItems, setCartItems]= useState([])
  const[count, setCount]= useState(1)
  function increment(){
    setCount(prev => prev + 1)
    if(count >= 20){
      setCount(20)
    }
  }
  function decrement(){
    setCount(prev => prev - 1)
    if(count <= 1){
      setCount(1)
    }
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  })


    let total = count * 3000;
    let ttotal = total * 3;
  
  return(
    <div className="cartq p_g">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="c_info">
          <img src={item.image} alt={item.name} className="c_img"/>
          <span className="d-price c_q c_n ">{item.name}</span>
          <div className="quantity">
            <button onClick={increment} className="c_B">+</button>
            <span className="c_c">{count}</span>
            <button onClick={decrement} className="c_B">-</button>
         </div>
         <span className="d-price c_q red">Ksh {item.d_price}</span>
         <span className="d-price green c_q">ksh {item.price_red}</span>
         <span className="d-price orange c_q">{total}/=</span>
         <button className="del">Delete</button>
        </div>
        
        ))
      ) : (
        <h2>Your cart is empty.</h2>
      )}
      {/* // <div className="c_info">
      //   <img src="/images/bags/bags (10).jpg" alt="logo" className="c_img" />
      //   <span className="d-price c_q">{item.name}</span>
      //   <div className="quantity">
      //     <button onClick={increment} className="c_B">+</button>
      //     <span className="c_c">{count}</span>
      //     <button onClick={decrement} className="c_B">-</button>
      //   </div>
      //   <span className="d-price c_q red">Ksh {item.d_price}</span>
      //   <span className="d-price green c_q">ksh 3000</span>
      //   <span className="d-price orange c_q">{total}/=</span>
      //   <button className="del">Delete</button>
      // </div>
      
      // <span className="d-price t_price">Total: {ttotal}/=</span> */}
      <span className="d-price t_price">Total: {ttotal}/=</span>
    </div> 
  )
}

export default CartQ;