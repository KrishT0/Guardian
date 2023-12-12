import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import classes from "./authentication.module.css";

function Authentication() {
  const [authMode, setAuthMode] = useState("login");

  function authClickHandler() {
    setAuthMode(authMode === "login" ? "signup" : "login");
  }

  return (
    <section className={classes.container}>
      <h1>Authentication</h1>
      <div>image with text</div>
      <div>{authMode === "login" ? <Login /> : <Signup />}</div>
    </section>
  );
}

export default Authentication;
