import React, { useState, useEffect } from "react";
import { departmentService } from "../../../../services/admin/department.service";
// import TableOption from "../../../../components/modal/TableOption";
// import { orderService } from "../../../../services/admin/order.service";
// import { SlOptionsVertical } from "react-icons/sl";
const FacultyTable = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const result = await departmentService.getAllFaculty();
        setDepartments(result.data.data || []);
      } catch (error) {
        console.error('Error fetching department data:', error);
        setDepartments([]);
      }
    };

    getDepartments();
  }, []);

  return (
    <div className="py-4 responsive overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {departments.map((department) => (
            <tr key={department.id}>
              <td className="px-6 py-4 whitespace-nowrap">
               {department.name}
              
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
               
                  {department.updatedAt}
              
              </td>
             
            </tr>
          ))}
          {departments.length === 0 && (
            <tr>
              <td colSpan="1" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">No departments found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyTable;
