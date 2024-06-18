import React from "react";
import { useState } from "react";

function CartQ(props){
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


    let total = count * 3000;
    let ttotal = total * 3;
  
  return(
    <div className="cartq p_g">
      <div className="c_info">
        <img src="/images/bags/bags (10).jpg" alt="logo" className="c_img" />
        <span className="d-price c_q">handbag</span>
        <div className="quantity">
          <button onClick={increment} className="c_B">+</button>
          <span className="c_c">{count}</span>
          <button onClick={decrement} className="c_B">-</button>
        </div>
        <span className="d-price c_q red">Ksh 2000</span>
        <span className="d-price green c_q">ksh 3000</span>
        <span className="d-price orange c_q">{total}/=</span>
        <button className="del">Delete</button>
      </div>
      
      <div className="c_info">
        <img src="/images/bags/bags (10).jpg" alt="logo" className="c_img" />
        <span className="d-price c_q">handbag</span>
        <div className="quantity">
          <button onClick={increment} className="c_B">+</button>
          <span className="c_c">{count}</span>
          <button onClick={decrement} className="c_B">-</button>
        </div>
        <span className="d-price c_q red">Ksh 2000</span>
        <span className="d-price green c_q">ksh 3000</span>
        <span className="d-price orange c_q">{total}/=</span>
        <button className="del">Delete</button>
      </div>

      <div className="c_info">
        <img src="/images/bags/bags (10).jpg" alt="logo" className="c_img" />
        <span className="d-price c_q">handbag</span>
        <div className="quantity">
          <button onClick={increment} className="c_B">+</button>
          <span className="c_c">{count}</span>
          <button onClick={decrement} className="c_B">-</button>
        </div>
        <span className="d-price c_q red">Ksh 2000</span>
        <span className="d-price green c_q">ksh 3000</span>
        <span className="d-price orange c_q">{total}/=</span>
        <button className="del">Delete</button>
      </div>
      
      <div className="c_info">
        <img src="/images/bags/bags (10).jpg" alt="logo" className="c_img" />
        <span className="d-price c_q">handbag</span>
        <div className="quantity">
          <button onClick={increment} className="c_B">+</button>
          <span className="c_c">{count}</span>
          <button onClick={decrement} className="c_B">-</button>
        </div>
        <span className="d-price c_q red">Ksh 2000</span>
        <span className="d-price green c_q">ksh 3000</span>
        <span className="d-price orange c_q">{total}/=</span>
        <button className="del">Delete</button>
      </div>

      <div className="c_info">
        <img src="/images/bags/bags (10).jpg" alt="logo" className="c_img" />
        <span className="d-price c_q">handbag</span>
        <div className="quantity">
          <button onClick={increment} className="c_B">+</button>
          <span className="c_c">{count}</span>
          <button onClick={decrement} className="c_B">-</button>
        </div>
        <span className="d-price c_q red">Ksh 2000</span>
        <span className="d-price green c_q">ksh 3000</span>
        <span className="d-price orange c_q">{total}/=</span>
        <button className="del">Delete</button>
      </div>
      <span className="d-price t_price">Total: {ttotal}/=</span>
    </div> 
  )
}

export default CartQ;