import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

function Register() {
  const history = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  // const [placeholder, setPlaceholder] = useState({
  //   username: "Username",
  //   email: "Email",
  //   password: "Password",
  // });

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("https://localhost:8000/register", {
        username,email,password
      })
      .then(res =>{
        if(res.data === "exist"){
          alert("User already exists")
        }
        else if(res.data === "notexist");{
          history("/",{state:{id:username}})
        }
      })
      .catch(e =>{
        alert("Something wrong")
        console.log(e)
      })
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="login">
      <h4 className="join">Join Us</h4>
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
          <img src="\images\email.png" alt="" className="icon" />
          <input
            type="email"
            className="txt"
            onChange={(e) =>{
              setEmail(e.target.value)
            } }
            placeholder="Email"
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
          <img src="\images\email.png" alt="" className="icon" />
          <input
            type="email"
            className="txt"
            onChange={(e) =>
              setPlaceholder((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            placeholder={placeholder.email}
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
        </div>
        <button type="submit" className="log space" onClick={submit}> 
          Register
        </button>
      </form>

      
    </div>
  );
}

export default Register;
