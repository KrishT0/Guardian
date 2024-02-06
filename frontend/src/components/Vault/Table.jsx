import React from 'react';
import classes from './vault.module.css';
import List from './List';
import tableData from './data.json';

function Table() {
  const data = tableData;

  return (
    <main>
      <div className={classes.topRowContainer}>
        <div className={classes.topHeadRow}>
          <p>Name</p>
          <p>Email</p>
          <p>Website</p>
          <p>Password</p>
        </div>
        <p className={classes.threeDot}>⋮</p>
      </div>
      {data.map((item) => (
        <List key={item.id} info={item} />
      ))}
      <div className={classes.bottomTable}></div>
    </main>
  );
}

export default Table;
