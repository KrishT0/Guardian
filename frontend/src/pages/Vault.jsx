import Table from '../components/Vault/Table';
import classes from '../components/Vault/vault.module.css';
import Modal from '../utils/ModalComp';
import Dropdown from '../utils/Dropdown';
import { useState } from 'react';
import data from '../components/Vault/data.json';
import { IoMdEye } from 'react-icons/io';

function Vault() {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [dataJson, setDataJson] = useState(data);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setUserData([]);
  };

  const editHandler = (id) => {
    setIsOpen(true);
    const data = dataJson.find((data) => data.id === id);
    setUserData(data);
  };

  const deleteHandler = (id) => {
    const data = dataJson.filter((data) => data.id !== id);
    setDataJson(data);
  };

  const passwordHandler = (id) => {
    const passElem = document.getElementById(id);
    if (passElem.type == 'text') {
      passElem.type = 'password';
    } else {
      passElem.type = 'text';
    }
  };

  const columnDef = [
    {
      accessorKey: 'id',
      header: 'Serial No.',
      cell: (data) => {
        return <>{data.row.index + 1}</>;
      },
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'website',
      header: 'Website',
    },
    {
      accessorKey: 'password',
      header: 'Password',
      cell: (data) => {
        return (
          <>
            <div className={classes.passContainer}>
              <input
                className={classes.inputPass}
                type="password"
                id={data.row.original.id}
                disabled
                value={data.getValue()}
              />
              <button
                className={classes.boton}
                onClick={() => passwordHandler(data.row.original.id)}
              >
                <IoMdEye />
              </button>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      cell: (data) => (
        <Dropdown
          handleEdit={() => editHandler(data.row.original.id)}
          handleDelete={() => deleteHandler(data.row.original.id)}
          data={data.row.original}
        />
      ),
    },
  ];
  return (
    <section className={classes.container}>
      <button onClick={openModal} className={classes.modalBtn}>
        Add password +
      </button>
      <Modal data={userData} isOpen={isOpen} onClose={closeModal} />
      <Table columnDef={columnDef} dataJSON={dataJson} />
    </section>
  );
}

export default Vault;
