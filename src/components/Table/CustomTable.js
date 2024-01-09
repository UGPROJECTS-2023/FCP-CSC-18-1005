import React from "react";
import { useTable, usePagination } from "react-table";

const CustomTable = ({ columns, data, onPageChange }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Set the initial page index
      manualPagination: true, // Enable manual pagination
      pageCount: data.length, // Set the page count based on the data length
    },
    usePagination
  );

  React.useEffect(() => {
    onPageChange({ nextPage, previousPage });
  }, [nextPage, onPageChange, previousPage]);

  return (
    <div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
      </div>
    </div>
  );
};

export default CustomTable;
