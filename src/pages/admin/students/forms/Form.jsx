import React, { useState, useEffect } from "react";
import Input from "../../../../components/controls/Input";
import PhotoUpload from "../../../../components/controls/PhotoUpload";
import SelectField from "../../../../components/controls/SelectField";
import SubmitButton from "../../../../components/controls/SubmitButton";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { studentService } from "../../../../services/admin/student.service";
import { departmentService } from "../../../../services/admin/department.service";
const Form = ({ onClose }) => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    blood: "",
    level: "",
    departmentId: "",
    facultyId: "",
    address: "",
    nextKin: "",
    regNo: "",
    dp: "",
  });
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [level, setLevel] = useState([]);
  useEffect(() => {
    const getDepartments = () => {
      departmentService.getAllDepart().then((result) => {
        if (result) {
          setDepartment(result.data.data);
        }
      });
      departmentService.getAllFaculty().then((facultyResult) => {
        if (facultyResult) {
          setFaculty(facultyResult.data.data);
        }
      });
      departmentService.getAllLevel().then((levelResult) => {
        if (levelResult) {
          setLevel(levelResult.data.data);
        }
      });
    };
    getDepartments();
  }, []);
  const createStudent = async () => {
    try {
      if (!image) {
        toast.error("No image selected.");
        return;
      }

      setLoading(true);

      const files = new FormData();
      files.append("document", image);

      const imageResult = await studentService.upload(files);

      if (imageResult && imageResult.data.success) {
        toast.success(imageResult.data.message);
        const req = {
          email: form?.email,
          phone: form?.phone,
          name: form?.name,
          blood: form?.blood,
          level: form?.level,
          departmentId: form?.departmentId,
          facultyId: form?.facultyId,
          address: form?.address,
          nextKin: form?.nextKin,
          regNo: form?.regNo,
          dp: imageResult.data.fileName,
        };
        await studentService
          .createStudent(req)
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
      } else {
        toast.error("Failed to upload the image.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-5">
      <div className="">
        <p className="text-xl text-center font-semibold">Add Student</p>
      </div>
      <div className="py-4">
        <div className="flex flex-row justify-center items-center space-x-4">
          <PhotoUpload
            onImageSelect={(e) => {
              const files = e.target.files;
              console.log(files[0]);
              if (files.length > 0) {
                // Store only the first selected file
                setImage(files[0]);
              } else {
                setImage(null);
              }
            }}
            name="thumbnail"
          />
        </div>
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
            <Input
              type="text"
              name="regNo"
              label="Ristration Number"
              placeholder="Ristration Number"
              onChange={(e) => {
                setForm({ ...form, regNo: e.target.value });
              }}
              value={form?.regNo}
            />
          </div>

          <div>
            <Input
              type="text"
              name="blood"
              label="Blood"
              placeholder="Blood"
              onChange={(e) => {
                setForm({ ...form, blood: e.target.value });
              }}
              value={form?.blood}
            />
          </div>
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
          <SelectField
            name="departmentId"
            label="Department"
            onChange={(e) => {
              setForm({ ...form, departmentId: e.target.value });
            }}
            value={form?.departmentId}
          >
            <option value="">Department</option>
            {department.map((depart, index) => {
              return (
                <option key={index} value={depart?.department?.id}>
                  {depart?.department?.name}
                </option>
              );
            })}
          </SelectField>
          <SelectField
            name="level"
            label="Level"
            onChange={(e) => {
              setForm({ ...form, level: e.target.value });
            }}
            value={form?.level}
          >
            <option value="">Level</option>
            {level.map((lev, index) => {
              return (
                <option key={index} value={lev?.id}>
                  {lev?.name}
                </option>
              );
            })}
          </SelectField>
          <div>
            <Input
              type="text"
              name="nextKin"
              label="Next Of Kin Number"
              placeholder="Next Of Kin Number"
              onChange={(e) => {
                setForm({ ...form, nextKin: e.target.value });
              }}
              value={form?.nextKin}
            />
          </div>
          <div>
            <Input
              type="text"
              name="address"
              label="Address"
              placeholder="Address"
              onChange={(e) => {
                setForm({ ...form, address: e.target.value });
              }}
              value={form?.address}
            />
          </div>
          <div></div>
          <div className="md:col-span-2">
            <SubmitButton onClick={!loading ? createStudent : null}>
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
  );
};

export default Form;
