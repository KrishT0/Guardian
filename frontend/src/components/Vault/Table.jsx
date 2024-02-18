import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import classes from './vault.module.css';
import List from './List';
import tableData from './data.json';
import { useTable, usePagination } from 'react-table';
import Dropdown from '../../utils/Dropdown';
import ModalForm from '../../utils/ModalForm';

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null); // Track selected row data

  const data = tableData;

  const openModal = (row) => {
    setSelectedRowData(row.original);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null); // Clear selected row data when closing modal
    setIsOpen(false);
  };

  const handleShowPassword = (data) => {
    console.log('password: ', data);
  };

  const handleEdit = () => {
    console.log('edit');
  };

  const handleDelete = () => {
    console.log('delete');
  };

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
          handleShowPassword={() => handleShowPassword(row.original)}
          handleEdit={() => handleEdit(row.original)}
          handleDelete={() => handleDelete(row.original)}
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

  return (
    <>
      <main>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()}>
                {hg.headers.map((header) => (
                  <th {...header.getHeaderProps()}>
                    {header.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} onClick={() => openModal(row)}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
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
      {isOpen && (
        <ModalForm
          isOpen={true}
          closeModal={closeModal}
          firstName={selectedRowData?.name}
          email={selectedRowData?.email}
          websiteUrl={selectedRowData?.website}
          password={selectedRowData?.password}
        />
      )}
    </>
  );
}

export default Table;
