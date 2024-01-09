import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import 'tailwindcss/tailwind.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Table = ({ columns, data, onPageChange }) => {
  const memoizedColumns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
  } = useTable(
    {
      columns: memoizedColumns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: 5,
    },
    usePagination
  );
  React.useEffect(() => {
    onPageChange({ nextPage, previousPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage, previousPage]);

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full table-auto border">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="p-2 text-center">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-2 text-center">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center py-3">
        <div className="flex space-x-5 items-center">
          <button
            onClick={previousPage}
            disabled={!canPreviousPage}
            className={`px-4 py-2 bg-primary text-white ${
              !canPreviousPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400 text-dark'
            }`}
          >
            <FaAngleLeft />
          </button>
          <div className="w-12 h-full bg-gray-200 flex justify-center items-center">
            <span className="text-lg text-primary">{pageIndex + 1}</span>
          </div>
          <button
            onClick={nextPage}
            disabled={!canNextPage}
            className={`px-4 py-2 bg-primary text-white ${
              !canNextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400 text-dark'
            }`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
