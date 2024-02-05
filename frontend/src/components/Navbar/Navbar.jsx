import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import logoImage from '../../assets/web-icon.svg';

function Navbar() {
  return (
    <nav>
      <Link to="/" className={classes.logo}>
        <img src={logoImage} alt="logo" />
      </Link>
      {/* <div className={classes.center}>
        <Link to="/" className={classes.btn}>
          Home
        </Link>
        <a href="https://github.com" className={classes.btn}>
          Source code
        </a>
      </div> */}
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
