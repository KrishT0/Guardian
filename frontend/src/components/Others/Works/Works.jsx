import classes from './work.module.css';
import WorkHero from './herosection/WorkHero';
import SensitiveInfo from './sensitiveinfo/SensitiveInfo';
import AcountSelect from './accountselect/AcountSelect';
import GuardianSend from './guardiansend/GuardianSend';

function Works() {
  return (
    <section className={classes.container}>
      <WorkHero />
      <SensitiveInfo />
      <GuardianSend />
      <AcountSelect />
    </section>
  );
}

export default Works;
