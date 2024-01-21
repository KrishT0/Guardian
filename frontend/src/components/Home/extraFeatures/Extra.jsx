import React from 'react';
import classes from './extra.module.css';
import ExtraCard from './ExtraCard';

import clockLock from '../../../assets/circle-lock.png';
import message from '../../../assets/message.png';
import safeLock from '../../../assets/safe-lock.png';
import keyLock from '../../../assets/key-lock.png';

function Extra() {
  const data = [
    {
      id: 1,
      imgRight: clockLock,
      headRight:
        'Generate, consolidate, and autofill strong and secure passwords for all your accounts',
      descRight:
        'Bitwarden gives you power to create and manage unique passwords and passkeys, so you can strengthen privacy and boost productivity online from any device or location.',
      imgLeft: message,
      headLeft: 'Securely share encrypted information directly with anyone',
      descLeft:
        'Bitwarden Send is a feature that allows all users to transmit data directly to others, while maintaining end-to-end encrypted security and limiting exposure.',
    },
    {
      id: 2,
      imgRight: keyLock,
      headRight: 'Gain peace of mind with comprehensive compliance',
      descRight:
        'Protect your online data using a password manager you can trust. Bitwarden conducts regular third-party security audits and is compliant with GDPR, SOC 2, HIPAA, Privacy Shield, and CCPA standards.',
      imgLeft: safeLock,
      headLeft: 'Protect more than your passwords',
      descLeft:
        'Store all types of sensitive data, transmit it securely to anyone, access vault health reports—and much more.',
    },
  ];

  return (
    <section className={classes.section}>
      {data.map((i) => {
        return (
          <ExtraCard
            key={i.id}
            leftImage={i.imgLeft}
            leftHeading={i.headLeft}
            leftDescription={i.descLeft}
            rightImage={i.imgRight}
            rightHeading={i.headRight}
            rightDescription={i.descRight}
          />
        );
      })}
    </section>
  );
}

export default Extra;
