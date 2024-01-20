import React from "react";
import classes from "./subscribe.module.css";

function Form() {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Form;
