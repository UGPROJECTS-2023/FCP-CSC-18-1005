import React, { useEffect, useState, useRef } from "react";
import { reportService } from "../../services/student/report.service";
import SubmitButton from "../../components/controls/SubmitButton";
import { RiDownloadCloud2Line } from "react-icons/ri";
import {useParams} from "react-router-dom"
import jsPDF from "jspdf";
const IMG_PATH = "/img/";
const LossDocument = () => {
    const inputRef = useRef(null)
    const { reference } = useParams();
    const [details, setDetails] = useState({});
useEffect(() =>{
    const getReport = () => {
        reportService.getReportByReference(reference)
          .then((result) => {
            if (result && result.data) {
              const info = result.data.report;
            //   console.log(JSON.stringify(info.student))
              setDetails(info);  
            } else {
              console.log("No user found or invalid response");
            }
          })
          .catch((error) => {
            console.error("Error fetching user:", error);
          })
          .finally(() => {
           
          });
      };
getReport()    
}, [reference])
const downloadAsPDF = () => {
    const input = document.getElementById("loss-document");

    if (!input) {
      return;
    }

    const pdf = new jsPDF("p", "pt", "a4");

    pdf.html(input, {
      callback: function (pdf) {
        pdf.save("generated.pdf");
      },
    });
  };

  return (
    <>
    <div className="flex py-12 px-5">
        <div className="justify-center">
        <SubmitButton onClick={downloadAsPDF }>
                <span className="flex flex-row space-x-2">
            <span>
                <RiDownloadCloud2Line size={15} className="text-white" />
                </span> 
                <span>Download</span>
                </span>
              </SubmitButton>
        </div>
    </div>
    <div id="loss-document" ref={inputRef} className="w-[500px] flex justify-start px-4">
      <div className="flex flex-col justify-start items-start  space-y-2">
        <div className="py-3 ml-44">
          <img className="w-24 h-20" src={`${IMG_PATH}fud.png`} alt="logo" />
        </div>
        <p className="text-xl font-bold text-dark capitalize ml-32">
          Federal University Dutse
        </p>
        <p className="text-md font-semibold text-dark capitalize ml-32">
          Office of the vice chancellor
        </p>
        <p className="text-md font-semibold text-center text-dark capitalize ml-32">
          (Security Divison)
        </p>
        <div className="flex flex-col space-y-2">
          <p className="text-xl text-start ml-32 font-semibold text-dark uppercase">
            Loss of Identity Card
          </p>
          <div className="flex flex-col space-y-2 justify-start px-4">
            <table className="w-[500px] border-collapse border border-dark">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-dark">Fullname:</td>
                  <td className="border px-4 py-2 text-dark">{details?.student?.name}</td>
                  <td className="border px-4 py-2 text-dark">Phone</td>
                  <td className="border px-4 py-2 text-dark">{details?.student?.phone}</td>
                </tr>
                <tr>
                <td className="border px-4 py-2 text-dark">Registration Number:</td>
                  <td className="border px-4 py-2 text-dark">{details?.student?.regNo}</td>
                  <td className="border px-4 py-2 text-dark">Email Address</td>
                  <td className="border px-4 py-2 text-dark">{details?.student?.email}</td>
                </tr>
              </tbody>
            </table>
            
          </div>
          <div className="w-full md:w-[800px] mx-auto flex flex-col space-y-2">
              <p className="text-xl text-dark  ml-12 capitalize">Circumstance of Loss</p>
              <p className="text-dark text-sm ml-12 text-justify w-[500px]">
              {details?.description}
              </p>
              <div className="py-12 flex flex-col space-y-2 ml-12">
              <p className="text-xl text-dark font-bold text-start ml-12 capitalize py-4">Confrim of security Division</p>
             <div className="flex flex-col space-y-3">
             <div className="text-center text-md flex flex-row space-x-3">
                <p className="text-md text-dark">Name:</p>
                <p className="text-md">______________________________________</p>
              </div>
              <div className="text-center text-md flex flex-row space-x-3">
                <p className="text-md text-dark">Appointment:</p>
                <p className="text-md">______________________________________</p>
              </div>
              <div className="text-center text-md flex flex-row space-x-3">
                <p className="text-md text-dark">Date:</p>
                <p className="text-md">________________________________________</p>
              </div>
              <p className="text-dark text-sm py-3">NOTE: Attach a copy of admission letter, and go to the security division for signing.</p>
             </div>
              </div>
            </div>
            <div className="flex mx-auto w-[200px] justify-center">
           
            </div>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default LossDocument;
