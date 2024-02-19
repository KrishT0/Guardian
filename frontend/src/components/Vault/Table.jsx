/* eslint-disable react/prop-types */
import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
// import dataJSON from "./data.json";

const Table = ({columnDef,dataJSON}) => {
  const finalData = React.useMemo(() => dataJSON, [dataJSON]);
  const finalColumnDef = React.useMemo(() => columnDef, [columnDef]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,  
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id} data-cell={cellEl.column.columnDef.header}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="actions">
        <button
          onClick={() => tableInstance.setPageIndex(0)}
          disabled={!tableInstance.getCanPreviousPage()}
          className="actionBtn"
        >
          {"<<"}
        </button>
        <button
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
          className="actionBtn"
        >
          Previous Page
        </button>
        <button
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
          className="actionBtn"
        >
          Next Page
        </button>
        <button
          onClick={() =>
            tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
          }
          disabled={!tableInstance.getCanNextPage()}
          className="actionBtn"
        >
          {">>"}
        </button>
      </div>
      <hr />
    </>
  );
};

export default Table;