import { Link } from 'react-router-dom';
import classes from './Plans.module.css';
export default function Plan({ plans }) {
  return (
    <div className={`${classes.items}`}>
      <h2>{plans.type}</h2>
      <div className={`${classes.div}`}>
        <p className={classes.price}>
          <sup>$</sup>
          {plans.price}
        </p>
        <p>{plans.date}</p>
        <p>{plans.expiry}</p>
      </div>
      <div className={`${classes.div}`}>
        <h3>{plans.titleFeat}</h3>
        <div>
          {plans.perks.map((perk) => (
            <p>{perk}</p>
          ))}
        </div>
      </div>
      <div className={`${classes.div}`}>
        <p>{plans.limit}</p>
        <Link to="/">
          <button>{plans.bttn}</button>
        </Link>
      </div>
    </div>
  );
}
