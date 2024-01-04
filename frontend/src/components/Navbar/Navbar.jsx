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
        <Link to="/personal" className={classes.btn}>
          Personal
        </Link>
        <Link to="/bussiness" className={classes.btn}>
          Bussiness
        </Link>
        <Link to="/ola" className={classes.btn}>
          Pricing
        </Link>
        <Link to="/ola" className={classes.btn}>
          Help
        </Link>
      </div>
      <Link to="/ola" className={classes.btn}>
        Sign Up
      </Link>
    </nav>
  );
}

export default Navbar;
