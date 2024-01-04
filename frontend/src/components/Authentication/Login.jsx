import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./authentication.module.css";

function Login({ setAuthMode }) {
  const navigate = useNavigate();

  function signUpHandler(e) {
    e.preventDefault();
    setAuthMode("signup");
  }

  function forgetPasswordHandler() {
    navigate("/forget-password");
  }

  return (
    <form className={classes.loginform}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="password">Master Password</label>
      <input type="password" id="password" />

      <button className={classes.tpButton} type="submit">
        Login
      </button>
      <p>
        Already registered !
        <button className={classes.btn} onClick={signUpHandler}>
          Sign Up
        </button>
      </p>
      <p className={classes.forget} onClick={forgetPasswordHandler}>
        Forgot password
      </p>
    </form>
  );
}

export default Login;
