import React, { useState, useEffect } from "react";
import { studentService } from "../../../../services/admin/student.service";
import {Link} from "react-router-dom" 
const StudentTable = () => {
  const [data, setTableState] = useState([]); // Set initial state as an empty array
  const getStudent = () => {
    studentService.getAllStudent().then((result) => {
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
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passport</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reg No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next of Kin</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
         
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((stud) => (
          <tr key={stud.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <Link to={`http://localhost:5009/uploads/${stud.student?.dp}`}>
            <img src={`http://localhost:5009/uploads/${stud.student?.dp}`} alt="police-report" />
            </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.phone}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.email}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.regNo}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.blood}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.nextKin}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.address}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.level}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.department?.name}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {stud.faculty?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {stud.student?.updatedAt}
            </td>

          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan="1" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">No student found</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  );
};

export default StudentTable;
