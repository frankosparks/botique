import React from "react";
import { useState, useContext } from "react";

function Cart(){
  // const { cart } = useContext(Context);
  const[showCart, setShowCart]= useState(false)
  const handleCart = () => {
    setShowCart(!showCart);
  }
  return(
    <div className="search-container cart-container">
      <button onClick={handleCart} className="search-icon" >
      <img src="\images\pink-shopping-cart-icon-17.gif" alt="" className="cart"/>
      </button>
      <div className="cart-info search-bar">
        {showCart&& (
          <>
          <h3>cart quantity</h3>
         {/* {cart.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt="" width="50" height="50" />
                            {item.name} - Ksh{item.d_price}
                        </li>
                    ))}
                </ul>
            )} */}
            <img src="" alt="" />
            <span>ksh 4000</span>
            <p><button className="btnlogin" >view</button></p>
          </>
        )}
      </div> 
    </div>
  );
}

export default Cart;