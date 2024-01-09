import React, { useState } from 'react';
import Navbar from '../pages/admin/components/navbar/navbar';
import Sidebar from '../pages/admin/components/sidebar/sidebar';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-layout-classic w-full h-full flex overflow-x-hidden">
     <div className="">
     <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
     </div>

      <div className={`flex flex-col w-full h-full overflow-hidden ${isSidebarOpen ? "md:ml-60" : "ml-0"}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="">
          <ToastContainer />
          <div className={`w-full  px-5 ${isSidebarOpen ? "w-full" : "w-full"}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
