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
          <h5 className="c-h">Latest Additions</h5>
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
            <div className="c">
              <img src="/images/dress/1 (55).jpg" alt="" className="c-img"/>
              <span className="d-price">ksh4000</span>
              <span className="d-price">Dress</span>
            </div>

            <div className="c">
              <img src="/images/dress/1 (55).jpg" alt="" className="c-img"/>
              <span className="d-price">ksh4000</span>
              <span className="d-price">Dress</span>
            </div>

            <div className="c">
              <img src="/images/dress/1 (55).jpg" alt="" className="c-img"/>
              <span className="d-price">ksh4000</span>
              <span className="d-price">Dress</span>
            </div>
            
            <p><button className="btnlogin c-view" >view</button></p>
          </>
        )}
      </div> 
    </div>
  );
}

export default Cart;