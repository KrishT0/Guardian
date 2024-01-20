import welcome from '../../../assets/desktop.png';
import classes from './Welcome.module.css';
export default function Welcome(){
    return <section className={classes.section}>
        <div className={classes.left}>
            <h1>Protect Your digital life With Your digital Guardian</h1>
            <p>Password management for individuals and families</p>
            <div className={classes.btnGroup}>
                <button className={classes.btn}>Get Started today</button>
            </div>
        </div>
        <img src={welcome} alt="desktop"  className={classes.right}/>
    </section>
}