import React, { useState } from "react";
import Modal from "react-modal";
import classes from "../components/Vault/vault.module.css";

const ModalComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add password</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={classes.modal}
      >
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal> 
    </div>
  );
};

export default ModalComp;
