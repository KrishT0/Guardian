import React from "react";
import classes from "./vault.module.css";
import Dropdown from "../../utils/Dropdown";

function List({ info }) {
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
    <div className={classes.list}>
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
  );
}

export default List;
