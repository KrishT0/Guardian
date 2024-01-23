import React from 'react';
import classes from './footer.module.css';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import x from '../../assets/x.png';

function Footer() {
  return (
    <footer>
      <div className={classes.box}>
        <p>© 2023 Guardian, Inc. </p>
        <p>Terms Privacy</p>
      </div>
      <div className={classes.box}>
        <a href="">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="">
          <img src={x} alt="X/twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
