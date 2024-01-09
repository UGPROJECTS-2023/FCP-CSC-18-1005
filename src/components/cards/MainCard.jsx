// import React from 'react'
import PropTypes from "prop-types"
const MainCard = ({children}) => {
  return (
    <div className="w-full h-full bg-white p-3 rounded-md shadow-md">
        {children}
    </div>
  )
}
MainCard.propTypes ={
    children:PropTypes.node,
}
export default MainCard