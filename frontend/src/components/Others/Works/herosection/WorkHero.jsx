import React from 'react';
import classes from './workhero.module.css';
import heroImage from '../../../../assets/work-hero.png';
import { Link } from 'react-router-dom';

function WorkHero() {
  return (
    <section className={classes.section}>
      <main className={classes.heroleft}>
        <h1>How Bitwarden works</h1>
        <p>
          Bitwarden helps you generate, save, and manage your logins safely and
          securely. You can also share secure information easily with others in
          your organization.
        </p>

        <div className={classes.btnGroup}>
          <Link to="/personal">
            <button>Guardian for you</button>
          </Link>
          <Link to="/bussiness">
            <button>Guardian for bussiness</button>
          </Link>
        </div>
      </main>
      <img src={heroImage} alt="heroimag" />
    </section>
  );
}

export default WorkHero;
