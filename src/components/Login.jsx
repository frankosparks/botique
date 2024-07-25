import React, { useState } from "react";
import Register from "./Register";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomAlert from "./timeout";

function Login({ setOpenLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openRegister, setOpenRegister] = useState(false);
  const[showAlert, setshowAlert]= useState("")

  const handleRegister = () => {
    setOpenRegister(prev => !prev);
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/", { username, password });
      if (res.data === "exist") {
        setshowAlert("Done");
        setOpenLogin(prev => !prev);
        navigate("/", { state: { id: username } });
      } else if (res.data === "notexist") {
        setshowAlert("User not registered");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
        setshowAlert(`Server error: ${error.response.data}`);
      } else if (error.request) {
        console.log("Error request:", error.request);
        setshowAlert("No response received from server. Please try again later.");
      } else {
        console.log("Error message:", error.message);
        setshowAlert(`Error: ${error.message}`);
      }
      console.log("Error config:", error.config);
    }
  }

  const closeAlert = () => {
    setshowAlert("");
  };

  return (
    <div className="login">
      {showAlert && <CustomAlert message={showAlert} onClose={closeAlert} />}
      <form action="" onSubmit={submit}>
        <div className="flex">
          <img src="/images/user.png" alt="" className="icon" />
          <input
            type="text"
            className="txt"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
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
            value={password}
          />
        </div>

        <div className="forget space">
          <input type="checkbox" className="Remember" /> &nbsp;
          <p className="rem">Remember me</p>
          <a href="pass" className="pass">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="log space">
          Login
        </button>
      </form>

      <p className="mg">
        Don't have an account?{" "}
        <button className="register space" onClick={handleRegister}>
          Register
        </button>
      </p>
      <Modal
        show={openRegister}
        onHide={handleRegister}
        size=""
        className="modal"
      >
        <div className="title">
          <img src="/images/prishan.jpg" alt="logo" className="logo" />
          <h1>Prishan's Boutique</h1>
        </div>
        <Register setOpenRegister={setOpenRegister} />
      </Modal>
    </div>
  );
}

export default Login;
