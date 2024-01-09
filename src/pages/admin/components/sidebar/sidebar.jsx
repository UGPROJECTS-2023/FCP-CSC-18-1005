import React from 'react';
import { TbReportAnalytics } from "react-icons/tb";
import { HomeIcon} from '@heroicons/react/24/outline';
import { PiStudentLight } from "react-icons/pi";
import { FaRegListAlt } from "react-icons/fa";
import { CgProductHunt } from "react-icons/cg";
import { RiSecurePaymentLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegAddressCard } from "react-icons/fa";
import MenuIcon from '../navbar/components/menu';
import Header from './header';
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";


const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const { pathname } = useLocation();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    const userRole = user ? user.role : null;
    const menuItems = [
      {
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon:<HomeIcon className="w-6 h-6" />,
          role:["ADMIN", "BUSARY", "SECURITY", "PRODUCTION"]
      },
      {
        title: 'Reports',
        type: 'item',
        url: '/reports',
        icon: <TbReportAnalytics className=" w-6 h-6" />,
        role:["ADMIN","SECURITY"]
    },
      {
          title: 'Students',
          type: 'item',
          url: '/students',
          icon: <PiStudentLight className="w-6 h-6" />,
          role:["ADMIN"]
      },
      {
        title: 'Department',
        type: 'item',
        url: '/department',
        icon: <FaRegListAlt className="w-6 h-6" />,
        role:["ADMIN"]
    },
    {
      title: 'On Production',
      type: 'item',
      url: '/production',
      icon: <CgProductHunt className="w-6 h-6" />,
      role:["ADMIN","SECURITY", "PRODUCTION"]
  },
  {
    title: 'Collected ID Card',
    type: 'item',
    url: '/collected',
    icon: < FaRegAddressCard className="w-6 h-6" />,
    role:["ADMIN","SECURITY", "PRODUCTION"]
  },
  {
    title: 'Payments',
    type: 'item',
    url: '/payments',
    icon: <RiSecurePaymentLine className="w-6 h-6" />,
    role:["ADMIN","BUSARY"]
  },
      {
          title: 'Users',
          type: 'item',
          url: '/users',
          icon: <HiOutlineUsers className=" w-6 h-6" />,
          role:["ADMIN"]
      },
  ];
  const filteredMenuItems = menuItems.filter((item) =>
    userRole ? item.role.includes(userRole) : true
  );
    return (
        <div className={`w-52 md:w-60 fixed bg-gray-50 h-screen shadow-sm ${isSidebarOpen ? "block" : "hidden"}`}>
         <div className="flex flex-row space-x-4 px-3">
         <div className="md:p-4">
         <Header />
         </div>
          <div className="md:hidden block mt-6">
          <MenuIcon toggleSidebar={toggleSidebar}   />
          </div>
          </div>
            <div className="py-6 px-2">
                <ul className="flex flex-col space-y-3 px-4 md:px-8">
                    {filteredMenuItems.map((lis, index) => {
                        return (
                            <li
                            key={index}
                            className={
                              pathname === lis.url
                                ? "w-full h-full p-2 bg-primary rounded-lg text-white"
                                : "w-full h-full p-2 bg-transparent hover:bg-slate-200 hover:rounded-lg hover:text-primary text-primary"
                            }
                          >
                            <Link to={lis.url} className="flex flex-row items-center space-x-2">
                              <span className="text-xl">
                                {React.cloneElement(lis.icon, {
                                  className: `${
                                    pathname === lis.url
                                      ? "text-white"
                                      : "text-primary"
                                  } w-6 h-6`
                                })}
                              </span>
                              <span className="text-lg font-regular">{lis.title}</span>
                            </Link>
                          </li>
                          
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool,
    toggleSidebar:PropTypes.func,
}
export default Sidebar;
