import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div>Logo</div>
      <div className={classes.center}>
        <Link to="/ola" className={classes.btn}>
          Home
        </Link>
        <Link to="/ola" className={classes.btn}>
          Personal
        </Link>
        <Link to="/ola" className={classes.btn}>
          Bussiness
        </Link>
        <Link to="/pricing" className={classes.btn}>
          Pricing
        </Link>
        <Link to="/ola" className={classes.btn}>
          Help
        </Link>
      </div>
      <div>
        <Link to="/auth/sign-up" className={classes.btn}>
          Get Started
        </Link>
        <Link to="/auth/login" className={classes.btn}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
