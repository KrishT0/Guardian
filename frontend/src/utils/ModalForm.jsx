/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import Form from '../components/Vault/Form';
import classes from './modal.module.css';

function ModalForm({
  isOpen,
  closeModal,
  data
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
          data={data}
        />
      </Modal>
    </>
  );
}

export default ModalForm;
