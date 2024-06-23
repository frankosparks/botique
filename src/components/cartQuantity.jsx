import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "./navbar";

function CartQ(){
  const[count, setCount] = useContext(Context)
  const[cartItems, setCartItems]= useState([])
  const[cont, setCont]= useState(1)
  function increment(){
    setCont(prev => prev + 1)
    if(cont >= 20){
      setCont(20)
    }
  }
  function decrement(){
    setCont(prev => prev - 1)
    if(cont <= 1){
      setCont(1)
    }
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  },[])

  const removeFromCart = (itemToRemove) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemToRemove.id);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
    setCount(prev => prev - 1)
  };

    let total = cont * 3000;
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
            <span className="c_c">{cont}</span>
            <button onClick={decrement} className="c_B">-</button>
         </div>
         <span className="d-price c_q red">Ksh {item.d_price}</span>
         <span className="d-price green c_q">ksh {item.price_red}</span>
         <span className="d-price orange c_q">{total}/=</span>
         <button className="del" onClick={() => removeFromCart(item)}>Delete</button>
        </div>
        
        ))
      ) : (
        <h2>Your cart is empty.</h2>
      )}
      
      <span className="d-price t_price">Total: {ttotal}/=</span>
    </div> 
  )
}

export default CartQ;