import React from "react";
import classes from "./vault.module.css";
import List from "./List";

function Table() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "jogndoe@gmail.com",
      website: "www.johndoe.com",
      password: "hola1234",
    },
    {
      id: 2,
      name: "William Brown",
      email: "williamb@gmail.com",
      website: "www.johndoe.com",
      password: "hola1234",
    },
    {
      id: 3,
      name: "Mary Smith",
      email: "marrysmith@gmail.com",
      website: "www.johndoe.com",
      password: "hola1234",
    },
    {
      id: 4,
      name: "Steve Rogers",
      email: "steverog@gmail.com",
      website: "www.johndoe.com",
      password: "hola1234",
    },
  ];

  return (
    <main>
      <div className={classes.topRowContainer}>
        <div className={classes.topHeadRow}>
          <p>Name</p>
          <p>Email</p>
          <p>Website</p>
          <p>Password</p>
        </div>
        <p className={classes.threeDot}>⋮</p>
      </div>
      {data.map((item) => (
        <List key={item.id} info={item} />
      ))}
      <div className={classes.bottomTable}></div>
    </main>
  );
}

export default Table;
