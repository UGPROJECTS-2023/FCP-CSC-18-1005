// import { useMemo } from 'react';
// import Table from '../../../../components/table/Table';
// import TableOption from '../../../../components/modal/TableOption';
// import { SlOptionsVertical } from 'react-icons/sl';
// import { Link } from 'react-router-dom';
// const LatestTransactionTable = () => {
//   // Define the columns and data for the table
//   const columns = useMemo(
//     () => [
//       {
//         Header: 'Name',
//         accessor: 'name'
//       },
//       {
//         Header: 'Reference',
//         accessor: 'reference'
//       },

      
//       {
//         Header: 'amount',
//         accessor: 'amount'
//       },
//       {
//         Header: 'Charges',
//         accessor: 'charges'
//       },
//       {
//         Header: 'net Amount',
//         accessor: 'netAmount'
//       },
//       {
//         Header: 'Transaction Type',
//         accessor: 'type'
//       },
//       {
//         Header: 'Status',
//         accessor: 'status'
//       },
//       {
//         Header: 'Date',
//         accessor: 'date'
//       },
//       {
//         Header: 'Action',
//         accessor: 'menu',
//         Cell: () => {
//           return (
//             <div>
//               <TableOption index={0} icon={<SlOptionsVertical size={20} className="text-primary" />}>
//                 <ul className="flex flex-col space-y-2 py-2 px-4 capitalize">
//                   <li className="">
//                     <button>view</button>
//                   </li>
//                 </ul>
//               </TableOption>
//             </div>
//           );
//         }
//       }
//     ],
//     []
//   );

//   const data = useMemo(
//     () => [
//       {
//         name: 'garo',
//         reference: 'REDcvv457630',
//         amount: "2045.00",
//         charges: "10.00",
//         netAmount: "2055.00",
//         type: "credit",
//         status: "successful",
//         date: '2023-09-07'
//       },
//       {
//         name: 'Mr Tee',
//         reference: 'REDcvv457630',
//         amount: "2045.00",
//         charges: "10.00",
//         netAmount: "2055.00",
//         type: "debit",
//         status: "failed",
//         date: '2023-09-07'
//       },
//       {
//         name: 'garo',
//         reference: 'REDcvv457630',
//         amount: "2045.00",
//         charges: "10.00",
//         netAmount: "2055.00",
//         type: "credit",
//         status: "successful",
//         date: '2023-09-07'
//       },
//     ],
//     []
//   );

//   return (
//     <>
//       <div className='p-4 flex flex-row justify-between'>
//         <p className='text-dark font-bold text-xl'>Latest Transactions</p>
//         <Link to="/transactions">
//           <p className='text-primary text-md'>See All</p>
//         </Link>
//       </div>
//       <div className='bg-gray-50 px-5 py-12'>
//         <Table columns={columns} data={data} />
//       </div>
//     </>
//   );
// };

// export default LatestTransactionTable;
