import ModalForm from './ModalForm';

const ModalComp = ({ data, isOpen, onClose }) => {
  return (
    <div>
      <ModalForm isOpen={isOpen} closeModal={onClose} data={data} />
    </div>
  );
};

export default ModalComp;
