// import React from 'react';
import PropTypes from 'prop-types';
import UserDropDown from "./components/UserDropDown"
import MenuIcon from './components/menu';
const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="w-full bg-gray-50 h-14 shadow-sm p-4">
            
              <div className="flex flex-row justify-between">
                <div className="justify-start">
                <MenuIcon toggleSidebar={toggleSidebar}   />
                </div>
            
             
           
            <div className="flex flex-row space-x-5 justify-end -mt-3">
                {/* <p className='hidden md:block text-md text-dark font-semibold mt-3'>Admin User</p> */}
                <div className="">
                  <UserDropDown />
                </div>
            </div>
        </div>
        </div>
    );
}


Navbar.propTypes = {
    toggleSidebar: PropTypes.func,
}
export default Navbar;
