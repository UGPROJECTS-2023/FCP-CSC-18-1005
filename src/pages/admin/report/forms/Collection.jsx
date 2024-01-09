import React, { useState } from 'react'
import { reportService } from '../../../../services/admin/report.service';
import SelectField from "../../../../components/controls/SelectField";
import SubmitButton from "../../../../components/controls/SubmitButton";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
const Collection = ({data, onClose}) => {
  const report = JSON.stringify(data.id); 
  // alert(report)
const [form, setForm]=useState({
  collectStatus:"",
})
const[loading, setLoading]= useState(false);
const verify = ()=>{
  setLoading(true) 

  reportService.updateCollectStatus(form, report).then((result) =>{
    if(result && result.data.success){
      toast.success(result.data.message)
    }else{
      toast.error(result.data.message);
    }
  }).catch((error) =>{
    toast.error("Expired Token")
  }).finally(()=>{
    setLoading(false) 
  })
}
  return (
    <div className='w-full px-5'>
        
        <div className="py-4">
            <div className="flex flex-col gap-4">
           
            <div>
                <SelectField
            name="securityVerify"
            label="Verify"
            onChange={(e) => {
              setForm({ ...form, collectStatus: e.target.value });
            }}
            value={form?.collectStatus}
          >
            <option value="">Status</option>
           
                <option  value="YES">
                COLLECTED
                </option>
                <option  value="NO">
                 NOT  COLLECTED
                </option>
          </SelectField>
                </div>
                <div className="">
                <SubmitButton
                 onClick={!loading ? verify : null}
                >
                            {loading ? (
                                <ClipLoader
                                    color="#fff"
                                    size={30}
                                    data-testid="loader"
                                />
                            ) : ( 
                             "Update"
                             )}
                        </SubmitButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection