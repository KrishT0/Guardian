import React from "react";
import classes from "./ebook.module.css";

import book from "../../../assets/message.png";

function Ebook() {
  return (
    <section className={classes.section}>
      <img src={book} alt="book image" />
      <div className={classes.right}>
        <h1>Protect your company from cyber criminals</h1>
        <p>
          Professional hacker, Rachel Tobac, breaks down the strategies to
          safeguard your company's assets and reputation from cyber criminals in
          her latest eBook.
        </p>
        <button>Get the eBook</button>
      </div>
    </section>
  );
}

export default Ebook;
