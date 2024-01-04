import React, { useState } from "react";
import classes from "./modal.module.css";
import ModalForm from "./ModalForm";

const ModalComp = ({ firstName, email, websiteUrl, password }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className={classes.modalBtn}>
        Add password +
      </button>
      <ModalForm
        isOpen={isOpen}
        closeModal={closeModal}
        firstName={firstName}
        email={email}
        websiteUrl={websiteUrl}
        password={password}
      />
    </div>
  );
};

export default ModalComp;
