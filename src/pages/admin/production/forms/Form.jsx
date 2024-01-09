import React from 'react'
import Input from "../../../../components/controls/Input";
import SelectField from "../../../../components/controls/SelectField";
import SubmitButton from "../../../../components/controls/SubmitButton";
const Form = () => {
  return (
    <div className='w-full px-5'>
        <div className="">
            <p className="text-xl text-center font-semibold">Add New Corperate Virtual Account</p>
        </div>
        <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                    <Input
                      type="text"
                      name=""
                    label="Business Name"
                    placeholder="Business Name"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                    <Input
                      type="text"
                      name=""
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                    <Input
                      type="text"
                      name=""
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                    <Input
                      type="text"
                      name=""
                    label="Other Name"
                    placeholder="Other Name"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                    <Input
                      type="text"
                      name=""
                    label="Phone Number"
                    placeholder="Phone Number"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                    <Input
                    type="text"
                    name=""
                    label="BVN"
                    placeholder="BVN"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                    <Input
                      type="text"
                      name=""
                    label="RC Number"
                    placeholder="RC Number"
                    value=""
                    onChange=""
                    />
                </div>
                <div>
                <SelectField name="" label="Virtual Account Type" value="">
            <option value="">Temporary</option>
            <option value="">Permanent</option>
           
          </SelectField>
                </div>
                <div className="md:col-span-2">
                <SubmitButton
                //  onClick={!loading ? signin : null}
                >
                            {/* {loading ? (
                                <ClipLoader
                                    color="#fff"
                                    size={30}
                                    data-testid="loader"
                                />
                            ) : ( */}
                              Submit
                            {/* )} */}
                        </SubmitButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form