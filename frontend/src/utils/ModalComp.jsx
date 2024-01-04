import React, { useState } from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import Form from "../components/Vault/Form";

const ModalComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div >
      <button onClick={openModal}>Add password</button>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={classes.modal}
      >
        <button onClick={closeModal} className={classes.modalCloseBtn}>❌</button>
        <Form />
      </Modal>
    </div>
  );
};

export default ModalComp;
