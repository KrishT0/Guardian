import React, { useState } from "react";
import classes from "./vault.module.css";
import Dropdown from "../../utils/Dropdown";
import ModalForm from "../../utils/ModalForm";

function List({ info }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleShowPassword = () => {
    console.log("show password");
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      {isOpen && (
        <ModalForm
          isOpen={true}
          closeModal={closeModal}
          firstName={info.name}
          email={info.email}
          websiteUrl={info.website}
          password={info.password}
        />
      )}
      <div className={classes.list} onClick={openModal}>
        <p>{info.name}</p>
        <p>{info.email}</p>
        <p>{info.website}</p>
        <p>{info.password}</p>
        <div>
          <Dropdown
            handleShowPassword={handleShowPassword}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default List;
