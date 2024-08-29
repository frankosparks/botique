import React, { useContext, useState, useEffect } from "react";
import { Context } from "./navbar";

function CartQ() {
  const [count, setCount] = useContext(Context);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const initializedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(initializedCart);

    // Initialize the count based on the number of unique items in the cart
    setCount(initializedCart.length);
  }, [setCount]);

  const increment = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.min(item.quantity + 1, 20) } : item
      )
    );
  };

  const decrement = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCount(prevCount => prevCount - 1);
  };

  const calculateTotal = (item) => {
    return item.quantity * item.d_price;
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => total + calculateTotal(item), 0);
  };

  return (
    <div className="cartq p_g">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="c_info">
            <img src={item.image} alt={item.name} className="c_img" />
            <span className="d-price c_q c_n ">{item.name}</span>
            <div className="quantity">
              <button onClick={() => increment(item.id)} className="c_B">+</button>
              <span className="c_c">{item.quantity}</span>
              <button onClick={() => decrement(item.id)} className="c_B">-</button>
            </div>
            <span className="d-price c_q red">Ksh {item.price_red}</span>
            <span className="d-price green c_q">Ksh {item.d_price}</span>
            <span className="d-price orange c_q">{calculateTotal(item)}/=</span>
            <button className="del" onClick={() => removeFromCart(item)}>Delete</button>
          </div>
        ))
      ) : (
        <h2>Your cart is empty.</h2>
      )}

      <span className="d-price t_price">Total: {calculateGrandTotal()}/=</span>
    </div>
  );
}

export default CartQ;
