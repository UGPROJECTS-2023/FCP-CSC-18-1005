import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { departmentService } from "../../../../services/admin/department.service";

const DepartTable = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const result = await departmentService.getAllDepart();
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
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FacultyId</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {departments.map((depart) => (
            <tr key={depart.id}>
              <td className="px-6 py-4 whitespace-nowrap">
               {depart.department?.name}
              
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/faculty/${depart.faculty?.id}`} className="text-blue-500 hover:underline">
                  {depart.faculty?.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
               {depart.department?.updatedAt}
              
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

export default DepartTable;
