import classes from './account.module.css';
import { Link } from 'react-router-dom';

function Account({ data }) {
  return (
    <div className={classes.card}>
      <img src={data.image} alt="image" />
      <h1>{data.heading}</h1>
      <p>{data.para1}</p>
      <p> {data.para2}</p>
      <Link to="/">{data.link}</Link>
    </div>
  );
}

export default Account;
