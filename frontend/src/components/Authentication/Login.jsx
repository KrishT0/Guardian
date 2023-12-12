import React from "react";
import classes from "./authentication.module.css";

function Login() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Master Password</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
