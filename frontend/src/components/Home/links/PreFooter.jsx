import React from 'react';
import { Link } from 'react-router-dom';
import classes from './prefooter.module.css';

function PreFooter() {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <div className={classes.linkGroup}>
          <h1>Products</h1>
          <Link to="/works">
            <p>How Guardian works</p>
          </Link>
          <Link to="/">
            <p>Guardian send</p>
          </Link>
          <Link to="/">
            <p>Pricing for Business</p>
          </Link>
          <Link to="/">
            <p>Pricing for Individuals</p>
          </Link>
        </div>
        <div className={classes.linkGroup}>
          <h1>Company</h1>
          <Link to="/">
            <p>About</p>
          </Link>
          <a href="https://github.com/KrishT0/Guardian">
            <p>Open Source</p>
          </a>

          <Link to="/">
            <p>Partners</p>
          </Link>
        </div>
        <div className={classes.linkGroup}>
          <h1>Resources</h1>
          <Link to="/">
            <p>Community Forums</p>
          </Link>
          <Link to="/">
            <p>Subscribe to Update</p>
          </Link>
        </div>
        <div className={classes.linkGroup}>
          <h1>Tools & Help</h1>
          <Link to="/">
            <p>Help and Documentation</p>
          </Link>
          <Link to="/">
            <p>Contact Support</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PreFooter;
