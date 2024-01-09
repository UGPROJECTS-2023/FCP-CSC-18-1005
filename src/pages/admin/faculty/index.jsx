import React, {useState} from 'react'
import FacultyTable from './Components/Table'
import RightDrawer from '../../../components/drawer/RightDrawer';
import Button from "../../../components/controls/Button";
import Form from './forms/Form';
import {BsFillPlusCircleFill} from "react-icons/bs"
const Faculty = () => {
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 
  const handleDrawerCorperateOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
 
  return (
    <div className="p-6">
    <div className=''>
        <p className="text-xl text-gray-500 font-semibold">Faculty</p>
    </div>

    <div className="p-3 bg-white">
    <div className="flex flex-col space-y-5 md:flex-row md:justify-between">
        <div />
       <div className="flex flex-row space-x-5 justify-end">
        <div className="mt-3">
        <Button
         
         onClick={(e) => {
          handleDrawerCorperateOpen();
        }}
           bgColor="bg-primary"
            textColor="text-white"
         >
          <span className="flex flex-row space-x-3">
               
               <span>
               <BsFillPlusCircleFill size={20} style={{ marginRight: "5px" }} />
               </span>
               <span>Add Faculty</span>
               </span>
         </Button>
        </div>
       </div>
      </div>
    <FacultyTable />
    </div>
    <RightDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
    <Form onClose={handleDrawerClose}/>
      </RightDrawer>
</div>
  )
}

export default Faculty