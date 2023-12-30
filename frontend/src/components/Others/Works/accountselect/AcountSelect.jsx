import classes from "./account.module.css";
import personal from "../../../../assets/personal.svg";
import bussiness from "../../../../assets/bussiness.svg";
import Account from "./Account";

function AcountSelect() {
  const data = [
    {
      image: personal,
      heading: "Guardian for you",
      para1:
        "Password managers secure and protect your online data in the face of rising cybercrime threats.",
      para2:
        "Guardian makes it easy to generate, store, and secure unique usernames and passwords from any location or device. Create your free account and invite a friend or family member to join your free two person organization.",
      link: "Create your free account",
    },
    {
      image: bussiness,
      heading: "Guardian for bussiness",
      para1:
        "Businesses choose trusted password managers to set a secure foundation for their company.",
      para2:
        "Bitwarden is open source and secures your private information with end-to-end encryption. Start a free trial for your organization and empower your team to store, access, and share sensitive data from any device.",
      link: "Start a Business Free Trial",
    },
  ];

  return (
    <section className={classes.container}>
      {data.map((item, index) => {
        return <Account key={index} data={item} />;
      })}
    </section>
  );
}

export default AcountSelect;
