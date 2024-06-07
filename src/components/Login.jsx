import React, { useState } from "react";

function Login() {
  const [placeholder, setPlaceholder] = useState({
    username: "Username",
    password: "Password",
  });

  return (
    <div className="login">
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
        <a href="register" className="reg space">
          Register
        </a>
      </p>
    </div>
  );
}

export default Login;
