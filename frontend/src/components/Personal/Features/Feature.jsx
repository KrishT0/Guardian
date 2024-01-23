import alert from '../../../assets/alert.png';
import control from '../../../assets/control.png';
import safe from '../../../assets/safe.png';
import time from '../../../assets/time.png';
import classes from './Feature.module.css';
export default function Feature() {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <h2>Effortlessly manage all your passwords and logins</h2>
      </div>
      <div className={classes.features}>
        <div className={classes.feature}>
          <img src={time} alt="save time" />
          <h3>Save time</h3>
          <p>
            Autofill forms, use biometrics, and easily generate secure
            passwords, passkeys, and usernames to help you move faster.
          </p>
        </div>
        <div className={classes.feature}>
          <img src={control} alt="control" />
          <h3>Take control</h3>
          <p>
            Access unlimited passwords, synced across all devices, and
            platforms.
          </p>
        </div>
        <div className={classes.feature}>
          <img src={safe} alt="safe" />
          <h3>Stay safe</h3>
          <p>
            Use strong passwords for all your online accounts, backed by
            end-to-end AES-256 bit encryption.
          </p>
        </div>
        <div className={classes.feature}>
          <img src={alert} alt="alert" />
          <h3>Stay alert</h3>
          <p>
            Test passwords for strength and monitor vault health reports for
            additional layers of protection.
          </p>
        </div>
      </div>
      <div className={classes.button}>
        <button className={classes.btn}>Sign up for free now</button>
      </div>
    </section>
  );
}
