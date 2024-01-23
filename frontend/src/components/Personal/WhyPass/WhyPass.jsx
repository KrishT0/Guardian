import classes from './WhyPass.module.css';
export default function WhyPass() {
  return (
    <section className={classes.section}>
      <div className={classes.why}>
        <div className={classes.logo}>
          <img src="" alt="Logo" />
        </div>
        <div className={classes.content}>
          <h3>Why password manager?</h3>
          <p>
            Your online world revolves around passwords. To stay safe from data
            breaches, you need to create strong and unique passwords for every
            account, but remembering them all without help gets tricky.
          </p>
          <p>
            Using a password manager lets you easily protect yourself and your
            data. Guardian generates, stores, and secures your most important
            digital assets in an end-to-end encrypted vault.
          </p>
          <p>
            Security should be available to all, which is why Guardian offers a
            free plan that delivers all the features you need to stay fully
            secure. Why wait? Try it today.
          </p>
        </div>
      </div>
    </section>
  );
}
