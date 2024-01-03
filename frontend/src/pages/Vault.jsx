import React from "react";
import Table from "../components/Vault/Table";
import classes from "../components/Vault/vault.module.css";

function Vault() {
  return (
    <section className={classes.container}>
      <h1>My Vault.</h1>
      <Table />
    </section>
  );
}

export default Vault;
