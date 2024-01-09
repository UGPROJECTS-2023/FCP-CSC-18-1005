import React, { useState } from "react";
import Input from "../../components/controls/Input";
import TextArea from "../../components/controls/TextArea";
import SubmitButton from "../../components/controls/SubmitButton";
import { reportService } from "../../services/student/report.service";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { IoCopyOutline } from "react-icons/io5";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const CreateReport = ({ onClose }) => {
  const [form, setForm] = useState({
    description: "",
    studentId: "",
  });
  const [verify, setVerify] = useState({
    regNo: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isDetails, setIsDetails] = useState(false);
  const verifyStudent = () => {
    setLoading(true);
    reportService.getStudent(verify.regNo, verify.phone)
      .then((result) => {
        if (result && result.data && result.data.success === true) {
          const user = result.data.user;
          setDetails(user);
          setIsDetails(true);
          setForm({
            ...form,
            description: '',
            studentId: user.id,
          });
        } else {
          console.log("No user found or invalid response");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
const [reportDetails, setReportDetails] = useState({})
const[report, setReport]= useState(false) 
  const create = () => {
    setLoading(true);
    reportService.createReport(form)
      .then((result) => {
        if (result && result.data.success) {
          toast.success(result.data.message);
          
          setReport(true)
          setReportDetails(result.data.data)
        } else {
          // toast.error(result.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error message for debugging
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy the reference value to the clipboard
  const copyReferenceToClipboard = () => {
    navigator.clipboard.writeText(reportDetails.reference)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000); // Reset copy success message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <div className="w-full px-5">
      <div className="">
        <p className="text-xl text-center font-semibold">Create a Report</p>
      </div>
      {report && (
        <>
        <div className="flex flex-col space-y-3 text-center">
            <p className="text-dark text-xl font-semibold">Report Succesfully Created..!</p>
            <p>Copy your reference and save it for the next proccess, <br /> and click on the download button to download the loss of the document for the proccess</p>
            {copySuccess && (
                  <span className="text-green-600">Copied!</span>
                )}
            <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
                <p className="flex flex-row space-x-3">
                    
                    <span>{reportDetails.reference}</span>
                    <span onClick={copyReferenceToClipboard}
                  style={{ cursor: "pointer" }}>

                    <IoCopyOutline size={20} className="text-primary" />
                    </span>
                </p>
                <Link to={`/doc/${reportDetails.reference}`} className="">
              <SubmitButton>
                <span className="flex flex-row space-x-2">
            <span>
                <RiDownloadCloud2Line size={15} className="text-white" />
                </span> 
                <span>Document</span>
                </span>
              </SubmitButton>
            </Link>
            </div>
        </div>
        </>
       )} 
     {!isDetails ? (
         <div className="py-4">
        <p className="text-center text-dark text-lg py-3">
          Verify your Identity
        </p>
        <div className="flex flex-col space-y-4">
          <div>
            <Input
              type="text"
              name="regNo"
              label="Registration No"
              placeholder="Registration No"
              onChange={(e) => {
                setVerify({ ...verify, regNo: e.target.value });
              }}
              value={verify?.regNo}
            />
          </div>
          <div>
            <Input
              type="text"
              name="phone"
              label="Phone"
              placeholder="Phone"
              onChange={(e) => {
                setVerify({ ...verify, phone: e.target.value });
              }}
              value={verify?.phone}
            />
          </div>

          <div className="">
            <SubmitButton onClick={!loading ? verifyStudent : null}>
              {loading ? (
                <ClipLoader color="#fff" size={30} data-testid="loader" />
              ) : (
                "Verify"
              )}
            </SubmitButton>
          </div>
        </div>
      </div>
      ):( 
         <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3">
            <div>
              <Input
                type="text"
                name="regNo"
                label="Registration No"
                placeholder="Registration No"
                onChange={(e) => {
                  setForm({ ...details, regNo: e.target.value });
                }}
                value={details?.regNo}
                disabled
              />
            </div>
            <div>
              <Input
                type="text"
                name="name"
                label="Fullname"
                placeholder="Fullname"
                onChange={(e) => {
                  setForm({ ...details, name: e.target.value });
                }}
                value={details?.name}
                disabled
              />
            </div>
            <div className="md:col-span-2">
              <TextArea
              name="description"
                label="Lost of Circumstance"
                placeholder="Lost of Circumstance"
                onChange={(e) => {
                  setForm({ ...form, description: e.target.value });
                }}
                value={form?.description}
              />
            </div>

            <div className="">
              <SubmitButton onClick={!loading ? create : null}>
                {loading ? (
                  <ClipLoader color="#fff" size={30} data-testid="loader" />
                ) : (
                  "Create"
                )}
              </SubmitButton>
            </div>
          </div>
        </div>) }
        
    </div>
  );
};

export default CreateReport;
