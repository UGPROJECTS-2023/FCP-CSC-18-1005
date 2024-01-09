// import React from 'react'
// import { Outlet } from 'react-router-dom';
import Logo from '../shared/logo/logo';
import PropTypes from "prop-types"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthLayout = ({ children }) => {
  return (
    <>
    <ToastContainer />
      
        <div className="w-full h-full md:h-screen bg-white">
         
       <div className="flex flex-col space-y-5 justify-center mx-4">
       <div className="flex justify-center items-center py-5">
              <Logo />
            </div>
       <div className="max-w-[800px] h-full p-8 border border-gray-300 rounded-lg mx-auto">
       {children}
       </div>
           </div>
          
        </div>


    
    </>
  )
}
AuthLayout.propTypes = {
  children: PropTypes.node
}
export default AuthLayout