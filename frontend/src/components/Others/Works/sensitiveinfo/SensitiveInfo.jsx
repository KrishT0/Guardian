import React from 'react';
import classes from './sensitiveinfo.module.css';
import infoImage from '../../../../assets/work-hero.png';
import Info from './Info';

function SensitiveInfo() {
  const data = [
    {
      image: infoImage,
      heading: 'Cross-Platform Applications',
      para: 'Secure and share sensitive data within your Bitwarden Vault from any browser, mobile device, or desktop application.',
    },
    {
      image: infoImage,
      heading: 'End-to-end encryption',
      para: 'Bitwarden fully encrypts all of your data before it ever leaves your device, and only you have access to it. Even the Bitwarden team cannot unlock your protected data. Bitwarden seals your sensitive information with end-to-end AES-256 bit encryption, salted hashing, and PBKDF2 SHA-256.',
    },
    {
      image: infoImage,
      heading: 'Global Community',
      para: 'Align to the highest security standards with a global community of password security experts and Bitwarden users.',
    },
  ];
  return (
    <section className={classes.section}>
      <h1>Quickly share sensitive information</h1>
      <div className={classes.cardContainer}>
        {data.map((item, index) => {
          return <Info key={index} data={item} />;
        })}
      </div>
    </section>
  );
}

export default SensitiveInfo;
