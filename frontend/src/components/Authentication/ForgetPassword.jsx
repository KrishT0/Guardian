import React from "react";
import forgetPassword from "../../assets/forget-password.png";
import classes from "./authentication.module.css";

function ForgetPassword() {
  return (
    <section className={classes.container}>
      <div>
        <img src={forgetPassword} alt="" />
      </div>
      <div>
        <form className={classes.forgetForm}>
          <label htmlFor="forget-password-email">Email</label>
          <input
            type="email"
            name="forget-password-email"
            id="forget-password-email"
          />
          <button>Send email</button>
        </form>
      </div>
    </section>
  );
}

export default ForgetPassword;
