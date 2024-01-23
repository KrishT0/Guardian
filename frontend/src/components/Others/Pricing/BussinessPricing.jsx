import React from 'react';
import classes from './pricing.module.css';
import BussinessCard from './BussinessCard';

function BussinessPricing() {
  const data = [
    {
      heading: 'Teams',
      ptop: 'Resilient protection for growing teams',
      price: '$4',
      month: 'per month/ per user',
      pdown:
        'Share sensitive data safely with coworkers, across departments, or the entire company',
      smallp: 'Includes premium features for all users',
      btn: 'Start a trial',
    },
    {
      heading: 'Enterprise',
      ptop: 'Advanced capabilities for larger organizations',
      price: '$6',
      month: 'per month/ per user',
      pdown:
        'Utilize advanced features including enterprise policies, passwordless SSO, and account recovery.',
      smallp: 'Includes premium features and free families plan for all users',
      btn: 'Start a trial',
    },
    {
      heading: 'Get a quote',
      ptop: 'For companies with hundreds or thousands of employees contact sales for a custom quote and see how Bitwarden can:',
      list: [
        'Reduce cybersecurity risk',
        'Boost productivity',
        'Integrate seamlessly',
      ],
      smallp:
        'Guardian scales with any sized business to bring password security to your organization',
      btn: 'Contact sales',
    },
  ];
  return (
    <main className={classes.main}>
      {data.map((i, index) => {
        return <BussinessCard key={index} data={i} />;
      })}
    </main>
  );
}

export default BussinessPricing;
