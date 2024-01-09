import React from 'react'
import ProductionTable from './Components/Table'

const Production = () => {

  return (
    <div className="p-6">
    <div className=''>
        <p className="text-xl text-gray-500 font-semibold">ON Production List</p>
    </div>

    <div className="p-3 bg-white">
    <div className="flex flex-col space-y-5 md:flex-row md:justify-between">
        <div />
       <div className="flex flex-row space-x-5 justify-end">
        
       </div>
      </div>
    <ProductionTable />
    </div>
    
</div>
  )
}

export default Production