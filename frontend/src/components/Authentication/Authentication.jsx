import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import classes from './authentication.module.css';
import auth from '../../assets/auth.png';

function Authentication({ mode }) {
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    setAuthMode(mode);
  }, [mode]);

  return (
    <section className={classes.container}>
      <div>
        <img src={auth} alt="" />
        <p className={classes.upperText}>
          Welcome to <span>Guardian</span>{' '}
        </p>
      </div>
      <div className={classes.rightContainer}>
        {authMode === 'login' ? (
          <Login setAuthMode={setAuthMode} />
        ) : (
          <Signup setAuthMode={setAuthMode} />
        )}
      </div>
    </section>
  );
}

export default Authentication;
