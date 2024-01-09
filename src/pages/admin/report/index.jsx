import React from 'react'
import ReportTable from './Components/Table'
const Report = () => {
  return (
    <div className="p-6">
    <div className=''>
        <p className="text-xl text-gray-500 font-semibold">All Reports</p>
    </div>

    <div className="p-3 bg-white">
    
    <ReportTable />
    </div>
     
</div>
  )
}

export default Report