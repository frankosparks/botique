import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function Register({ setOpenRegister}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/register", {
        username,
        email,
        password
      });

      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        alert("Successfully registered")
        setOpenRegister(prev => !prev)
        navigate("/", { state: { id: username } });
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
        alert(`Server error: ${error.response.data}`);
      } else if (error.request) {
        console.log("Error request:", error.request);
        alert("No response received from server. Please try again later.");
      } else {
        console.log("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
      console.log("Error config:", error.config);
    }
  }

  return (
    <div className="login">
      <h4 className="join">Join Us</h4>
      <form action="">

        <div className="flex">
          <img src="/images/user.png" alt="" className="icon" />
          <input
            type="text"
            className="txt"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>

        <br />

        <div className="flex">
          <img src="/images/email.png" alt="" className="icon" />
          <input
            type="email"
            className="txt"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <br />

        <div className="flex">
          <img src="/images/padlock.webp" alt="" className="icon" />
          <input
            type="password"
            className="txt"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

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
