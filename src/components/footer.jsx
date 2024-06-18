import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import Register from "./Register";
import Cart from "./cartItems";
// import Welcome from "./welcome";
// import { Nav } from "react-bootstrap";
// import { Routes, Route, Link } from "react-router-dom";

function Footer(){
  const navigate = useNavigate();
  const [RegisterObj, setRegisterObj] = useState({})
  const[openRegister, setOpenRegister] = useState(false)
  const handleRegister = (Register) => {
    if(Register) {
        setRegisterObj(Register)
    }
    setOpenRegister(prev => !prev)
  };

  

  return(
    <div className="footer">
      <div className="social">
        <div className="Media">
          <img src="\images\facebook.avif" alt="" className="s-icon"/>
          <p className="center">facebook</p>
        </div>
        <div className="Media">
          <img src="\images\google.avif" alt="" className="s-icon" />
          <p className="center">google</p>
        </div>
        <div className="Media">
          <img src="\images\instagram2.avif" alt="" className="s-icon"/>
          <p className="center">instagram</p>
        </div>
        <div className="Media">
          <img src="\images\tik.avif" alt="" className="s-icon"/>
          <p className="center">tiktok</p>
        </div>
        <div className="Media">
          <img src="\images\twitter.avif" alt="" className="s-icon"/>
          <p className="center">twitter</p>
        </div>
        <div className="Media">
          <img src="\images\youtube.avif" alt="" className="s-icon"/>
          <p className="center">youtube</p>
        </div>
      </div>
      <div className="f-more">
        <h5 className="center f_c">SIGN UP & GET WEEKLY ACCESS TO OUR LATEST DROPS & MORE!</h5>

        <button  
          className="btnlogin f-btn" 
          onClick={() => handleRegister()}>
          Sign Up
        </button>
    

      <Modal 
           show={openRegister}
           onHide={() => handleRegister()}
           size={""}
           className="modal"
           
         >
          <div className="title">
          <img src="\images\prishan.jpg" alt="logo" className="logo"/>
           <h1>Prishan's Botique</h1> 
          </div>
           <Register />
        </Modal>

        <div className="f-moremore ">
          <div className="the-botique">
          <h5 className="bold1" >THE BOTIQUE</h5>
            <div className="flex dir mg1 c_g">
              <span>Careers</span>
              <span>collaborations</span>
              <span>Store Location</span>
              <span>Legal Terms</span>
              <span>Privacy Pospancy</span>
            </div>
           
          </div>
          <div className="the-botique">
            <h5  className="bold1">MEMBERSHIP</h5>
            <div className="flex dir mg1 c_g">
              <span>Sign In</span>
              <span>Create Account</span>
              <span>Order Status</span>
              <span>Order History</span>
            </div>
          </div>
          <div className="the-botique">
            <h5  className="bold1">CUSTOMER CARE</h5>
            <div className="flex dir mg1 c_g">
              <span>Accessibispanty</span>
              <span>Order Status</span>
              <span>Return Poicy</span>
              <span>Shipping and Returns</span>
            </div>
          </div>
          <div className="the-botique">
            <h5  className="bold1">CONTACT US</h5>
            <div className="flex dir mg1 c_g">
              <span>
                 <img src="\images\phone.avif" alt="" className="f-small mg3"/> 
                 <a href="#" className="f-media c_g">+254 738380692</a>
               </span>
              <span>
                <img src="\images\facebook.avif" alt="" className="f-small mg3"/>   <a href="#facebook" className="f-media c_g">Pritt Dress Makers</a>
              </span>
              <span>
                <img src="\images\instagram.avif" alt=""className="f-small mg3"/> <a href="#insta" className="f-media c_g">@_pritt_dress_makers</a>
              </span>
              <span>
                <img src="\images\tiktok.avif" alt="" className="f-small mg3"/> 
                <a href="#tiktok" className="f-media c_g">@_pritt_dress_makers</a>
              </span>
              <span>
                <img src="\images\twitter.avif" alt="" className="f-small mg3"/>
                <a href="#twitter" className="f-media c_g">@_pritt_dress_makers</a>
              </span>
              <span>
                <img src="\images\youtube.avif" alt="" className="f-small mg3"/> 
                <a href="#youtube"className="f-media c_g">@_pritt_dress_makers</a>
              </span>
            </div>
            
          </div>
        </div>
        
        <hr />
        <div className="copyright">
          <p>
          {/* <Nav.Link as={Link} to="/">
          <button>
            <img src="\images\prishan.jpg" alt="logo" className="logo"/>
          </button>
          </Nav.Link>
              <Routes>
                <Route path="/" element={<Welcome />} />
              </Routes> */}
          <img src="\images\prishan.jpg" alt="logo" className="logo" onClick={()=> navigate('/')} style={{ cursor: 'pointer' }}/>
          <span className="Rapp c_w">Prishan's Botique.</span>
             Copyright &copy; 2024 Prishan's Botique. All rights reserved.
          </p>  
     </div>
      <Cart />
    </div>
     
  </div>
  )
}

export default Footer;