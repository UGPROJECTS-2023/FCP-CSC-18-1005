import React, {useState} from 'react'
import Input from "../../../../components/controls/Input";
import InputField from "../../../../components/controls/InputField";
import SelectField from "../../../../components/controls/SelectField";
import SubmitButton from "../../../../components/controls/SubmitButton";
import {  FiLock } from 'react-icons/fi';
import { FaRegEye, FaRegEyeSlash, } from 'react-icons/fa6';
import { authService } from '../../../../services/auth/auth.service';
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
const Form = ({onClose}) => {
  const [form, setForm] = useState({
    email: "",
    phone:"",
    name:"",
    role:"",
    password: "",
    confirmPassword: ""
});
const [loading, setLoading] = useState(false);
const [passwordVisible, setPasswordVisible] = useState(false);
const [cPasswordVisible, setCPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};
const toggleCPasswordVisibility = () => {
  setCPasswordVisible(!cPasswordVisible);
};
const createUser = () => {
  if (form.password !== form.confirmPassword) {
    toast.error('Passwords do not match!');
  } else {
    // alert(JSON.stringify(form))
    setLoading(true);
    authService
      .createUser(form)
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
        toast.error('Something went wrong!');
      })
      .finally(() => {
        setLoading(false);
      });
  }
};
  return (
    <div className='w-full px-5'>
        <div className="">
            <p className="text-xl text-center font-semibold">Add User</p>
        </div>
        <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Input
                      type="text"
                      name="email"
                    label="Email Address"
                    placeholder="Email Address"
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                  }}
                  value={form?.email}
                    />
                </div>
                <div>
                    <Input
                      type="text"
                      name="phone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                  }}
                  value={form?.phone}
                    />
                </div>
                <div>
                <SelectField name="role" label="Role"  onChange={(e) => {
                      setForm({ ...form, role: e.target.value });
                  }}
                  value={form?.role}>
            <option value="">role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="SECURITY">SECURITY</option>
            <option value="BUSARY">BUSARY</option>
            <option value="PRODUCTION">PRODUCTION</option>
           
          </SelectField>
                </div>
              
                <div className=''>
                        <InputField
                            type={passwordVisible ? "text" : "password"}
                            value={form?.password}
                            name="password"
                            label="Password"
                            placeholder="Password"
                            onChange={(e) => {
                                setForm({ ...form, password: e.target.value });
                            }}
                            leftIcon={<FiLock size={20} />}
                            rightIcon={
                                passwordVisible ? (
                                    <FaRegEyeSlash size={20}  onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaRegEye size={20}  onClick={togglePasswordVisibility} />
                                )
                            }
                        />
                    </div>
                    <div className=''>
                        <InputField
                            type={cPasswordVisible ? "text" : "password"}
                            value={form?.confirmPassword}
                            name="confirmPassword"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            onChange={(e) => {
                                setForm({ ...form, confirmPassword: e.target.value });
                            }}
                            leftIcon={<FiLock size={20} />}
                            rightIcon={
                                cPasswordVisible ? (
                                    <FaRegEyeSlash size={20}  onClick={toggleCPasswordVisibility} />
                                ) : (
                                    <FaRegEye size={20}  onClick={toggleCPasswordVisibility} />
                                )
                            }
                        />
                    </div>
               
                <div className="md:col-span-2">
                <SubmitButton
                 onClick={!loading ? createUser : null}
                >
                            {loading ? (
                                <ClipLoader
                                    color="#fff"
                                    size={30}
                                    data-testid="loader"
                                />
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