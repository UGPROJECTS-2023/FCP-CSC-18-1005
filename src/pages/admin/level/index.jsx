import React, {useState} from 'react'
import LevelTable from './Components/Table'
import RightDrawer from '../../../components/drawer/RightDrawer';
import Button from "../../../components/controls/Button";
import Form from './forms/Form';
const Level = () => {
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
        <p className="text-xl text-gray-500 font-semibold">Level</p>
    </div>

    <div className="p-3 bg-white">
    <div className="flex flex-col space-y-5 md:flex-row md:justify-between">
        <div />
       <div className="flex flex-row space-x-5 justify-end">
        <div className="mt-3">
        <Button
         value="Add Level"
         onClick={(e) => {
          handleDrawerCorperateOpen();
        }}
           bgColor="bg-primary"
            textColor="text-white"
         />
         
        </div>
       </div>
      </div>
    <LevelTable />
    </div>
      <RightDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
    <Form />
      </RightDrawer>
</div>
  )
}

export default Level