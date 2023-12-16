import React from "react";
import PersonalCard from "./PersonalCard";
import classes from "./pricing.module.css";

function PersonalPricing() {
  const data = [
    {
      heading: "Free",
      price: "$0",
      para: "free forever",
      smallhead: "Get a Guardian vault",
      features: [
        "Unlimited devices",
        "Passkey management",
        "All the core functions",
        "Always free",
      ],
      smallpara: "Share vault items with one other user",
      btn: "get started today",
    },
    {
      heading: "Premium",
      price: "Less than $1",
      para: "$10 billed annually  ",
      smallhead: "Enjoy premium features",
      features: [
        "Guardian Authenticator",
        "File attachments",
        "Emergency access",
        "Security reports and more",
      ],
      smallpara: "Share vault items with one other user",
      btn: "Create premium account",
    },
    {
      heading: "Families",
      price: "$3.33",
      para: "Up to 6 users, $40 billed annually",
      smallhead: "Secure your family logins",
      features: [
        "6 premium accounts",
        "Unlimited sharing",
        "Unlimited collections",
        "Organization storage",
      ],
      smallpara: "Share vault items between six people",
      btn: "Start free 7-day trial",
    },
  ];

  return (
    <>
      <main className={classes.main}>
        {data.map((i) => {
          return (
            <PersonalCard
              key={i.heading}
              heading={i.heading}
              price={i.price}
              para={i.para}
              smallhead={i.smallhead}
              features={i.features}
              smallpara={i.smallpara}
              btn={i.btn}
            />
          );
        })}
      </main>
    </>
  );
}

export default PersonalPricing;
