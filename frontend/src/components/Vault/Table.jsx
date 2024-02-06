import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs'; // Import the three-dot icon
import classes from './vault.module.css';
import List from './List';
import tableData from './data.json';
import { useTable, usePagination } from 'react-table';
import Dropdown from '../../utils/Dropdown';
import ModalForm from '../../utils/ModalForm';

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const data = tableData;
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Website',
      accessor: 'website',
    },
    {
      Header: 'Password',
      accessor: 'password',
    },
    {
      Header: <BsThreeDots />,
      accessor: 'actions',
      Cell: ({ row }) => (
        <Dropdown
          handleShowPassword={handleShowPassword}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={row.original}
        />
      ),
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const handleShowPassword = (data) => {
    console.log('password: ', data);
  };

  const handleEdit = () => {
    console.log('edit');
  };

  const handleDelete = () => {
    console.log('delete');
  };
  return (
    <>
      <main>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()}>
                {hg.headers.map((header) => {
                  return (
                    <th {...header.getHeaderProps()}>
                      {header.render('Header')}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button disabled={!canPreviousPage} onClick={previousPage}>
            Prev
          </button>
          <span>
            {pageIndex + 1} of {pageCount}
          </span>
          <button disabled={!canNextPage} onClick={nextPage}>
            Next
          </button>
        </div>
      </main>
      {/* {isOpen && (
        <ModalForm
          isOpen={true}
          closeModal={closeModal}
          firstName={info.name}
          email={info.email}
          websiteUrl={info.website}
          password={info.password}
        />
      )} */}
    </>
  );
}

export default Table;
