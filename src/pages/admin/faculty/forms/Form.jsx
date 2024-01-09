import React, { useState} from 'react'
import Input from "../../../../components/controls/Input";
import SubmitButton from "../../../../components/controls/SubmitButton";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { departmentService } from "../../../../services/admin/department.service";
const Form = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const create = () => {
    // alert(JSON.stringify(form))
    setLoading(true);
    departmentService
      .createFaculty(form)
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
    <div className='w-full px-5'>
        <div className="">
            <p className="text-xl text-center font-semibold">Add Faculty</p>
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
               
                <div className="">
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