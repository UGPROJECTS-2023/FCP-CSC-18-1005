import React, { useState, useEffect } from "react";
import { authService } from "../../../../services/auth/auth.service";
// import TableOption from "../../../../components/modal/TableOption";
// import { orderService } from "../../../../services/admin/order.service";
// import { SlOptionsVertical } from "react-icons/sl";
const UsersTable = () => {
  const [data, setTableState] = useState([]); // Set initial state as an empty array
  const getStudent = () => {
    authService.getAll().then((result) => {
      if (Array.isArray(result?.data?.data))  { 
        setTableState(result.data.data); // Update tableState with the fetched data array
      } else {
        console.error('Data structure is not as expected or empty.');
        setTableState([]); // Set an empty array if data structure is not as expected or empty
      }
    }).catch((error) => {
      console.error('Error fetching student data:', error);
      setTableState([]); // Set an empty array or handle the error case accordingly
    });
  };
  useEffect(() => {
getStudent();
  }, []);
  return (
    <div className="py-4 responsive overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
          
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((stud) => (
          <tr key={stud.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.phone}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.email}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.role}
           </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud?.updatedAt}
            </td>

          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan="1" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">No user found</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  );
};


export default UsersTable;
