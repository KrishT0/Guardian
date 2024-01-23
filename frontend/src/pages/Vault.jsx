import React from 'react';
import Table from '../components/Vault/Table';
import classes from '../components/Vault/vault.module.css';
import Modal from '../utils/ModalComp';

function Vault() {
  return (
    <section className={classes.container}>
      <h1>My Vault.</h1>
      <Modal />
      <Table />
    </section>
  );
}

export default Vault;
