import { plans } from './planData';
import Plan from './Plan';
import classes from './Plans.module.css';
export default function Plans() {
  return (
    <section className={classes.section}>
      <div className={`${classes.divs}`}>
        <h1>Choose the plan that fits your needs</h1>
        {plans.map((plan) => (
          <Plan plans={plan} />
        ))}
      </div>
    </section>
  );
}
