// import React from 'react';
import DashboardBody from "./components/DashboardBody";
import DashboardHeader from "./components/DashboardHeader"
const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col space-y-4 py-6">
        <div className="">
          <h3 className="text-dark text-2xl font-bold capitalize">Dashboard</h3>
        </div>
        <DashboardHeader />
        <DashboardBody />
      </div>
    </div>
  );

}

export default Dashboard;
