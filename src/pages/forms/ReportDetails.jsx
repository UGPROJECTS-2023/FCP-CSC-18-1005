import React, { useState } from "react";
import Input from "../../components/controls/Input";
import SubmitButton from "../../components/controls/SubmitButton";
import { reportService } from "../../services/student/report.service";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { FaRegLaughBeam } from "react-icons/fa";
const ReportDetails = ({ onClose }) => {
  const [pol, setPol] = useState([]);
  const [court, setCourt] = useState([]);
  const [verify, setVerify] = useState({
    reference: "",
  });
  const [loading, setLoading] = useState(false);
  const [courtloading, setCLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isDetails, setIsDetails] = useState(false);
  const getReport = () => {
    setLoading(true);
    reportService
      .getReportByReference(verify.reference)
      .then((result) => {
        if (result && result.data && result.data.success === true) {
          const report = result.data.report;
          console.log(JSON.stringify(report));
          setDetails(report);
          setIsDetails(true);
        } else {
          console.log("No Report found or invalid response");
        }
      })
      .catch((error) => {
        console.error("Error fetching report:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const uploadPoliceFiles = async () => {
    if (pol) {
      setLoading(true);
      const polFormData = new FormData();
      polFormData.append("pliceDoc", pol);
  
      try {
        const polUploadResult = await reportService.uploadPoliceDoc(polFormData, details.id);
        if (polUploadResult?.success) {
          toast.success("Police file uploaded successfully!");
        } else {
          toast.error("Police file upload failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong with police file upload!");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please select a police file to upload!");
    }
  };
  
  const uploadCourtFiles = async () => {
    if (court) {
      setCLoading(true);
      const courtFormData = new FormData();
      courtFormData.append("courtDoc", court);
  
      try {
        const courtUploadResult = await reportService.uploadCourtDoc(courtFormData, details.id);
        if (courtUploadResult?.success) {
          toast.success("Court file uploaded successfully!");
        } else {
          toast.error("Court file upload failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong with court file upload!");
      } finally {
        setCLoading(false);
      }
    } else {
      toast.error("Please select a court file to upload!");
    }
  };
  
  return (
    <>
    {details?.collectStatus ==="YES" ? (
        <>
        <div className="flex flex-col justify-center items-center text-center top-50">
            <div className="justify-center items-center">
                <FaRegLaughBeam size={250} className="text-primary" />
            </div>
            <p className="text-dark text-3xl px-5 text-cent font-bold">You Have Collected you Re Issued ID Card
            <br/> Thank you for using the system...</p>
            </div></>
    ):(
        <> <div className="w-full px-5">
        <div className="">
          <p className="text-xl text-center font-semibold">Report Details</p>
        </div>
        {!isDetails ? (
          <div className="py-4">
            <p className="text-center text-dark text-lg py-3">
              Get your Report Details
            </p>
            <div className="flex flex-col space-y-4">
              <div>
                <Input
                  type="text"
                  name="reference"
                  label="Report Reference"
                  placeholder="Report Reference"
                  onChange={(e) => {
                    setVerify({ ...verify, reference: e.target.value });
                  }}
                  value={verify?.reference}
                />
              </div>
  
              <div className="">
                <SubmitButton onClick={!loading ? getReport : null}>
                  {loading ? (
                    <ClipLoader color="#fff" size={30} data-testid="loader" />
                  ) : (
                    "get Report"
                  )}
                </SubmitButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">
            <p className="text-dark text-md text-center y-3 py-5">
              Report Details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3">
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Reference :</p>
                <p className="text-md">{details?.reference}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Circumstance :</p>
                <p className="text-md">{details?.description}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Report Status :</p>
                <p className="text-md">{details?.status}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Payment Status :</p>
                <p className="text-md">{details?.paymentStatus}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Document Verification :</p>
                <p className="text-md">{details?.securityVerify}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">ID Card Production Status:</p>
                <p className="text-md">{details?.productionStatus}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">ID Card Collected Status :</p>
                <p className="text-md">{details?.collectStatus}</p>
              </div>
              <div />
              {details.pliceDoc ==="" && details.courtDoc ==="" ?(
                  <>
                  <div className="flex flex-col space-y-4 py-2">
                <p className="text-dark">Upload Police Report Document</p>
                <input
                  type="file"
                  onChange={(event) => {
                    const selectedFile = event.target.files[0];
                    if (selectedFile) {
                      setPol(selectedFile);
                    } else {
                      setPol(null);
                    }
                  }}
                  name="pliceDoc"
                />
                <SubmitButton onClick={!loading ? uploadPoliceFiles : null}>
                  {loading ? (
                    <ClipLoader color="#fff" size={30} data-testid="loader" />
                  ) : (
                    "Upload"
                  )}
                </SubmitButton>
              </div>
              <div className="flex flex-col space-y-4 py-2">
                <p className="text-dark">Upload Cout Appidevit Document</p>
                <input
                  type="file"
                  onChange={(event) => {
                    const selectedFile = event.target.files[0];
                    if (selectedFile) {
                      setCourt(selectedFile);
                    } else {
                      setCourt(null);
                    }
                  }}
                  name="courtDoc"
                />
                <SubmitButton onClick={!courtloading ? uploadCourtFiles : null}>
                  {courtloading ? (
                    <ClipLoader color="#fff" size={30} data-testid="loader" />
                  ) : (
                    "Upload"
                  )}
                </SubmitButton>
              </div>
                  </>
              ):(
                  <>
                  <div className="flex flex-col space-y-3">
                      <p>Police Report</p>
                      <Link to={`http://localhost:5009/uploads/${details.pliceDoc}`}>
                      <img className="w-32 h-32" src={`http://localhost:5009/uploads/${details.pliceDoc}`} alt="police-report" />
                      </Link>
                  </div>
                  <div className="flex flex-col space-y-3">
                      <p>Court Appidevit</p>
                      <Link to={`http://localhost:5009/uploads/${details.courtDoc}`}>
                      <img className="w-32 h-32" src={`http://localhost:5009/uploads/${details.courtDoc}`} alt="court-report" />
                      </Link>
                  </div>
                  </>
              )}
              
            </div>
  {details.paymentStatus=== "PAID"?(<>
  <div className="flex flex-col space-y-3 py-6 justify-end">
      <p className="text-md text-dark">Download Temporary ID Card before your re issued ID Card is produce..</p>
      <Link to={`/evidence/${details.reference}`} className="">
               <div className="w-1/3">
               <SubmitButton>
                  <span className="flex flex-row space-x-2">
              <span>
                  <RiDownloadCloud2Line size={15} className="text-white" />
                  </span> 
                  <span>Download</span>
                  </span>
                </SubmitButton>
               </div>
              </Link>
              </div>
  </>):(<></>)}
            <p className="text-dark text-md text-center y-3 py-12">
              Student Details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3">
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Fullname:</p>
                <p className="text-md">{details?.student?.name}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Registration Number :</p>
                <p className="text-md">{details?.student?.regNo}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Email :</p>
                <p className="text-md">{details?.student?.email}</p>
              </div>
              <div className="flex flex-row space-x-3">
                <p className="text-dark text-md">Phone :</p>
                <p className="text-md">{details?.student?.phone}</p>
              </div>
            
            </div>
          </div>
        )}
      </div></>
    )}
   
    </>
  );
};

export default ReportDetails;
