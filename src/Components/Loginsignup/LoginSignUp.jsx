import React, { useState } from "react";
import "./Login.css";
import usericon from "../Assets/user.png";
import mail from "../Assets/gmail.png";
import password from "../Assets/lock.png";

const LoginSignUp = () => {
  const [action, setaction] = useState("sign up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={usericon} alt="" />
            <input id="text-input" type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={mail} alt="" />
          <input id="email-input" type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input id="password-input" type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Login" ? (
        <div></div>
      ) : (
        <div className="forget-password">
          Forgot Password <span>Click here</span>
        </div>
      )}

      <div className="submitbtn">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setaction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setaction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
