import React, { useState } from "react";
import Register from "./Register";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router";

function Login() {
  const history = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [placeholder, setPlaceholder] = useState({
  //   username: "Username",
  //   password: "Password"
  // });

  const [RegisterObj, setRegisterObj] = useState({})
  const[openRegister, setOpenRegister] = useState(false)
  const handleRegister = (Register) => {
    if(Register) {
        setRegisterObj(Register)
    }
    setOpenRegister(prev => !prev)
  };

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("https://localhost:8000/", {
        username,password
      })
      .then(res =>{
        if(res.data == "exist"){
          history("/",{state:{id:username}})
        }
        else if(res.data == "notexist");{
          alert("User not registred")
        }
      })

      .catch(e =>{
        alert("Wrong details")
        console.log(e)
      })
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="login">
      <form action="">

      <div className="flex">
          <img src="\images\user.png" alt="" className="icon" />
          <input
            type="text"
            className="txt"
            onChange={(e) =>{
              setUsername(e.target.value)
            }
          }
            placeholder="Username"
          />
        </div>

        <br />

        <div className="flex">
          <img src="\images\padlock.webp" alt="" className="icon" />
          <input
            type="password"
            className="txt"
            onChange={(e) =>{
              setPassword(e.target.value)
            } 
          }
            placeholder="Password"
          />
        </div>

        {/* <div className="flex">
          <img src="\images\user.png" alt="" className="icon" />
          <input
            type="text"
            className="txt"
            onChange={(e) =>
              setPlaceholder((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
            id=""
            placeholder={placeholder.username}
          />
        </div>

        <br />

        <div className="flex">
          <img src="\images\padlock.webp" alt="" className="icon" />
          <input
            type="password"
            className="txt"
            onChange={(e) =>
              setPlaceholder((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            placeholder={placeholder.password}
          />
        </div> */}

        <div className="forget space">
          <input type="checkbox" name="" className="Remember" /> &nbsp;
          <p className="rem">Remember me</p>
          <a href="pass" className="pass">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="log space" onClick={submit}>
          Login
        </button>
      </form>

      <p className="mg">
        Don't have an account?{" "}
        <button  
          className="register space" 
          onClick={() => handleRegister()}>
          Register
        </button>
      </p>
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
    </div>
  );
}

export default Login;
