import React, {useState, useEffect} from 'react'
import Input from "../../../../components/controls/Input";
import SelectField from "../../../../components/controls/SelectField";
import SubmitButton from "../../../../components/controls/SubmitButton";
import { departmentService } from "../../../../services/admin/department.service";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
const Form = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    facultyId: "",
  });
  const [loading, setLoading] = useState(false);
  const [faculty, setFaculty] = useState([]);
  useEffect(() => {
    const getDepartments = () => {
     
      departmentService.getAllFaculty().then((facultyResult) => {
        if (facultyResult) {
          setFaculty(facultyResult.data.data);
        }
      });
     
    };
    getDepartments();
  }, []);
  const create = () => {
    // alert(JSON.stringify(form))
    setLoading(true);
    departmentService
      .createDepart(form)
      .then((result) => {
        if (result && result.data.success) {
          toast.success(result.data.message);
          onClose();
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        // toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full px-5">
        <div className="">
            <p className="text-xl text-center font-semibold">Add Department</p>
        </div>
        <div className="py-4">
            <div className="flex flex-col space-y-4">
                <div>
                <Input
              type="text"
              name="name"
              label="Name"
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              value={form?.name}
            />
                </div>
               
                <div>
                <SelectField
            name="facultyId"
            label="Faculty"
            onChange={(e) => {
              setForm({ ...form, facultyId: e.target.value });
            }}
            value={form?.facultyId}
          >
            <option value="">Faculty</option>
            {faculty.map((fac, index) => {
              return (
                <option key={index} value={fac?.id}>
                  {fac?.name}
                </option>
              );
            })}
          </SelectField>
                </div>
                <div className="md:col-span-2">
                <SubmitButton onClick={!loading ? create : null}>
              {loading ? (
                <ClipLoader color="#fff" size={30} data-testid="loader" />
              ) : (
                "Submit"
              )}
            </SubmitButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form