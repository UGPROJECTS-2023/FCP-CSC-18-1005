import React, { useState, useEffect } from "react";
import { reportService } from "../../../../services/admin/report.service";
import { Link } from "react-router-dom";
import TableOption from "../../../../components/modal/TableOption";
import CustomModal from "../../../../components/modal/CustomModal";
import { SlOptionsVertical } from "react-icons/sl";
import Verify from "../forms/Verify";
import Production from "../forms/Production";
import Payment from "../forms/Payment";
import Collection from "../forms/Collection";
const ReportTable = () => {
  const [data, setTableState] = useState([]); // Set initial state as an empty array
  const getAllReports = () => {
    reportService.getReports().then((result) => {
      if (Array.isArray(result?.data?.reports))  { 
        console.log(result?.data.reports)
        setTableState(result.data.reports); // Update tableState with the fetched data array
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
  getAllReports();
  }, []);
const [details, setDetails] = useState({})
const[pay, setPay]= useState(false)
const[collect, setCollect]= useState(false)
const[produce, setProduce]= useState(false)

const [isModalOpen, setIsModalOpen] = useState(false);
  
const handleModalOpen = (id) => {
  const selectedReport = data.find(report => report.id === id);
  if (selectedReport) {
    setDetails(selectedReport);
    setIsModalOpen(true);
  }
};
  const handleModalClose = () => setIsModalOpen(false);

const openCModal =(id)=>{
  const selectedReport = data.find(report => report.id === id);
  if (selectedReport) {
    setDetails(selectedReport);
  setCollect(true)
  }
}
const closeCModal = ()=> setCollect(false);

const openPayModal =(id)=>{
  const selectedReport = data.find(report => report.id === id);
  if (selectedReport) {
    setDetails(selectedReport);
  setPay(true)
  }
}
const closePayModal =()=> setPay(false);

const openPrModal =(id)=>{
  const selectedReport = data.find(report => report.id === id);
  if (selectedReport) {
    setDetails(selectedReport);
  setProduce(true)
  }
}
const closePrModal =()=> setProduce(false);
  return (
    <>
    <div className="py-4 responsive overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SN</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter Reg No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Police Report</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Court Report</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Production Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collection Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Reported</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
         
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((report, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              {++index}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {report.reference}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {report.description}
            </td><td className="px-6 py-4 whitespace-nowrap">
              {report.student.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {report.student?.regNo}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {report.student?.phone}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {report.student?.email}
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
              <Link to={`http://localhost:5009/uploads/${report.pliceDoc}`}>
            <img src={`http://localhost:5009/uploads/${report.pliceDoc}`} alt="police-report" />
            </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <Link to={`http://localhost:5009/uploads/${report.courtDoc}`}>
            <img src={`http://localhost:5009/uploads/${report.courtDoc}`} alt="police-report" />
            </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {report.status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {report.paymentStatus}
            </td>
             <td className="px-6 py-4 whitespace-nowrap">
              {report.productionStatus}
            </td>
             <td className="px-6 py-4 whitespace-nowrap">
              {report.collectStatus}
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
              {report.updatedAt}
            </td>
<td>
  <div>
              
              <TableOption
                index={0}
                icon={<SlOptionsVertical size={20} className="text-primary" />}
              >
                <ul className="flex flex-col space-y-1 py-2 capitalize">
                  <li className="">
                    <button
                     onClick={() => {handleModalOpen(report.id)}}
                       
                    className="w-full p-2 hover:bg-primary hover:text-white">
                      Verify Report
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full p-2 hover:bg-primary hover:text-white"
                        onClick={() =>{
                          openPayModal(
                            report.id
                          )
                        }
                        }
                    >
                      Update Payment Status
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full p-2 hover:bg-primary hover:text-white"
                      onClick={() =>{
                        openPrModal(report.id)
                      }
                      }
                    >
                     Update Production Status
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full p-2 hover:bg-primary hover:text-white"
                      onClick={() =>
                        {
                        openCModal(report.id)
                        }
                      }
                    >
                     Update Collection Status
                    </button>
                  </li>
                </ul>
              </TableOption>
            </div></td>
          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan="1" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">No report found</td>
          </tr>
        )}
      </tbody>
    </table>
   
  </div>
  <CustomModal title="Verify Document" open={isModalOpen} onClose={handleModalClose}  width={400}
                  height={250}>
          <Verify data={details} onClose={handleModalClose} />
        </CustomModal>
   
    <CustomModal title="Update Collection Status" open={collect} onClose={closeCModal} width={400}
                  height={250}>
      <Collection data={details} onClose={closeCModal} />
      </CustomModal>
      <CustomModal title="Update Production Sttaus" open={produce} onClose={closePrModal} width={400}
                  height={250}>
      <Production data={details} onClose={closePrModal} />
      </CustomModal>
      <CustomModal title="Update Payment Status" open={pay} onClose={closePayModal} width={400}
                  height={250}>
      <Payment data={details} onClose={closePayModal} />
      </CustomModal>
  </>
  );
};

export default ReportTable;
