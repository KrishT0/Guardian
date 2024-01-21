import React from 'react';
import classes from './authentication.module.css';

function Signup({ setAuthMode }) {
  function loginHandler(e) {
    e.preventDefault();
    setAuthMode('login');
  }

  return (
    <form className={classes.signUpform}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Master Password</label>
      <input type="password" id="password" name="password" />

      <button type="submit" className={classes.tpButton}>
        SignUp
      </button>
      <p>
        Already have an account !
        <button className={classes.btn} onClick={loginHandler}>
          Log in
        </button>
      </p>
    </form>
  );
}

export default Signup;
