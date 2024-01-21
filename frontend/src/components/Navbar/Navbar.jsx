import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

function Navbar() {
  return (
    <nav>
      <div>Logo</div>
      <div className={classes.center}>
        <Link to="/" className={classes.btn}>
          Home
        </Link>
        <Link to="/personal" className={classes.btn}>
          Personal
        </Link>
        <Link to="/bussiness" className={classes.btn}>
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
