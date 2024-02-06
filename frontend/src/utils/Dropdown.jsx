import React, { useState } from 'react';
import classes from './dropdown.module.css';

function Dropdown({ handleShowPassword, handleEdit, handleDelete, data }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prevState) => !prevState);

  const ShowPassword = () => {
    handleShowPassword(data.password);
  };

  const Edit = () => {
    handleEdit();
  };

  const Delete = () => {
    handleDelete();
  };

  function handleBlur() {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }

  return (
    <div className={classes.dropdown}>
      <button onClick={toggle} onBlur={handleBlur}>
        ⋮
      </button>
      {open && (
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <button onClick={ShowPassword}>Show password</button>
          </li>
          <li className={classes.menuItem}>
            <button onClick={Edit}>Edit</button>
          </li>
          <li className={classes.menuItem}>
            <button onClick={Delete}>Delete</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
