import React, { useState, useMemo } from "react";
import Table from "../../../../components/Table/Table";
import { Link } from "react-router-dom";
// import TableOption from "../../../../components/modal/TableOption";
// import { orderService } from "../../../../services/admin/order.service";
// import { SlOptionsVertical } from "react-icons/sl";
const LevelTable = () => {
  const [tableState, setTableState] = useState({});

  const handlePageChange = ({ nextPage, previousPage }) => {
    setTableState({ nextPage, previousPage });
  };

  // Example data and columns (replace this with your data and columns)
  const data = [
    {
      accountNumber: 4567890871,
      accountName: "John Doe",
      accountType: "corperate",
      validityType: "Permanent",
      bank: "GT Bank",
      date: "23-12-23",
    },
    // Add more data objects as needed
  ];

  const columns = useMemo(() => {
    return [
      {
        Header: "Account Number",
        accessor: "accountNumber",
      },
      {
        Header: "Account Name",
        accessor: "accountName",
      },
      {
        Header: "Bank",
        accessor: "bank",
      },
      {
        Header: "Account Type",
        accessor: "accountType",
      },
      {
        Header: "Validity Type",
        accessor: "validityType",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Action",
        accessor: "menu",
        Cell: ({ row }) => {
          return (
            <div>
              {/* <TableOption
                index={0}
                icon={<SlOptionsVertical size={20} className="text-primary" />}
              >
                <ul className="flex flex-col space-y-1 py-2 px-4 capitalize">
                  <li className=""> */}
                  <Link to="/virtual-transaction">
                    <button className="w-full p-2 text-md font-semibold text-primary hover:bg-primary hover:text-white">
                     View Transactions
                    </button>
                    </Link>
                  {/* </li>
                 
                </ul>
              </TableOption> */}
            </div>
          );
        },
      },
    ];
  }, []);

  return (
    <div className="">
      <div className="py-4">
        <Table columns={columns} data={data} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default LevelTable;
