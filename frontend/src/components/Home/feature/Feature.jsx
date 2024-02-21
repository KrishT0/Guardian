import React from 'react';
import FeatureCard from './FeatureCard';
import classes from './feature.module.css';

import lockImage from '../../../assets/lock-eye.svg';
import clockImage from '../../../assets/clock.svg';
import device from '../../../assets/device.svg';

function Feature() {
  const data = [
    {
      img: clockImage,
      head: 'Powerful security within minutes',
      desc: 'For those who want to do more, secure more, and collaborate more, Bitwarden is fast and easy to set up for both individuals and businesses.',
    },
    {
      img: device,
      head: 'Unlimited passwords, unlimited devices',
      desc: 'Cross platform access for mobile, browser, and desktop apps. Supported in over 50 languages.',
    },
    {
      img: lockImage,
      head: "Protect what's important to you",
      desc: 'Zero knowledge, end-to-end encryption guides the Bitwarden open source approach to trust, accountability, and security.',
    },
  ];

  return (
    <section className={classes.section}>
      <h1>Everything you need out of a password manager</h1>
      <div className={classes.feature}>
        {data.map((item) => {
          return (
            <FeatureCard
              key={item.head}
              image={item.img}
              head={item.head}
              desc={item.desc}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Feature;
