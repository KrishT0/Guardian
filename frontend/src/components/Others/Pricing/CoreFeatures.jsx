import React from 'react';
import classes from './coreFeatures.module.css';
import CoreFeatureList from './CoreFeatureList';

function CoreFeatures() {
  const data = [
    {
      list: [
        'Open source security',
        'Zero-knowledge encryption',
        'Unlimited devices, unlimited passwords',
        'Browser, Mobile, Desktop apps',
      ],
    },
    {
      list: [
        'Passkey management and usage',
        'Store notes, credit cards, identities',
        'Free sharing with another user',
        'Bitwarden Send',
      ],
    },
    {
      list: [
        'Username and password generator',
        'Email alias integration',
        'Advanced two-step login',
        'Encrypted export',
      ],
    },
  ];
  return (
    <div className={classes.pricing}>
      <h1>Core features included in every Guardian account:</h1>
      <div className={classes.list}>
        {data.map((i, index) => {
          return <CoreFeatureList key={index} list={i} />;
        })}
      </div>
    </div>
  );
}

export default CoreFeatures;
