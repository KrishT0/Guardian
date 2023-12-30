import classes from "./guardiansend.module.css";
import keyLock from "../../../../assets/choose-account.png";

function GuardianSend() {
  return (
    <section className={classes.container}>
      <img src={keyLock} alt="image" />
      <div className={classes.right}>
        <h1>Bitwarden Send for secure one-to-one data sharing</h1>
        <p>
          Securely transmit encrypted files, attachments, and text to others
        </p>
        <button>Explore Guardian send</button>
      </div>
    </section>
  );
}

export default GuardianSend;
