import React from 'react';
import classes from './footer.module.css';
import { Link } from 'react-router-dom';
// import instagram from '../../assets/instagram.png';
// import facebook from '../../assets/facebook.png';
// import x from '../../assets/x.png';
import github from '../../assets/github.svg';

function Footer() {
  return (
    <footer>
      <div className={classes.box}>
        <p>© 2023 Guardian, Inc. </p>
        <Link to="/privacy">Terms Privacy</Link>
      </div>
      <a href="https://github.com/KrishT0/Guardian">
        <img src={github} alt="github-logo" className={classes.logo} />
      </a>
      {/* <div className={classes.box}>
        <a href="">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="">
          <img src={x} alt="X/twitter" />
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;
