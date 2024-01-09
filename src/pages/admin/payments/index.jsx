import React from 'react'
import Form from './forms/Form';
import ReportTable from '../report/Components/Table';
const Payment = () => {
  
  return (
    <div className="p-6">
    <div className=''>
        <p className="text-xl text-gray-500 font-semibold">Payments</p>
    </div>

    <div className="p-3 bg-white">
    <div className="flex flex-col space-y-5 md:flex-row md:justify-between">
        <div />
       <div className="flex flex-row space-x-5 justify-end">
       
       </div>
      </div>
    <ReportTable/>
    </div>
    
</div>
  )
}

export default Payment