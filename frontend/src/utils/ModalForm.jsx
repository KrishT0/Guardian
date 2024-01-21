import React from 'react';
import Modal from 'react-modal';
import Form from '../components/Vault/Form';
import classes from './modal.module.css';

function ModalForm({
  isOpen,
  closeModal,
  firstName,
  email,
  websiteUrl,
  password,
}) {
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={classes.modal}
      >
        <button onClick={closeModal} className={classes.modalCloseBtn}>
          ❌
        </button>
        <Form
          firstNameProp={firstName}
          emailProp={email}
          websiteUrlProp={websiteUrl}
          passwordProp={password}
        />
      </Modal>
    </>
  );
}

export default ModalForm;
