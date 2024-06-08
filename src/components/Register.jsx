import React, { useState } from "react";

function Register() {
  const [placeholder, setPlaceholder] = useState({
    username: "Username",
    email: "Email",
    password: "Password",
  });

  return (
    <div className="login">
      <h4 className="join">Join Us</h4>
      <form action="">
        <div className="flex">
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
        </div>

        <div className="forget space">
          <input type="checkbox" name="" className="Remember" /> &nbsp;
          <p className="rem">Remember me</p>
        </div>
        <button type="submit" className="log space">
          Register
        </button>
      </form>

      
    </div>
  );
}

export default Register;
