import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import RightDrawer from "../components/drawer/RightDrawer";
import Button from "../components/controls/Button";
import CreateReport from "./forms/CreateReport";
import ReportDetails from "./forms/ReportDetails";
// import Form from './forms/Form';
const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

  const handleSearchDrawerOpen = () => {
    setIsSearchDrawerOpen(true);
  };
  const handleSearchDrawerClose = () => {
    setIsSearchDrawerOpen(false);
  };
  return (
    <div className="w-full h-full py-6  md:px-4">
      <div className="flex flex-col space-y-3 text-center">
        <p className="text-2xl font-bold text-dark">
          Student ID Card Reissued System
        </p>
        <p className="text-xl text-dark font-semibold">
          Federal University Duste
        </p>
        <p>
          The Student ID Card Reissuing System streamlines the reissuing process
          for lost ID cards by enabling students to report the loss, download
          required documents (such as a report form, police report, and court
          affidavit), and upload verified documents back into the system. The
          system verifies uploaded documents, prompting the student via email to
          make a payment for the new ID card once verification is successful.
          Upon payment confirmation, a temporary ID card is available for
          download. Throughout this process, the system ensures stringent
          identity verification, employs robust encryption for data security,
          and sends automated email notifications at each stage, facilitating a
          seamless and secure reissuing experience for students while
          maintaining administrative oversight.
        </p>
      </div>
      <div className="flex flex-col space-y-4 py-4">
        <div className="flex flex-row gap-4 ">
          <Button
            type="button"
            onClick={(e) => {
              handleDrawerOpen();
            }}
            bgColor="bg-primary"
            textColor="text-white"
          >
            <span className="flex flex-row space-x-3">
              <span>
                <BsFillPlusCircleFill
                  size={20}
                  style={{ marginRight: "5px" }}
                />
              </span>
              <span>Report</span>
            </span>
          </Button>
          <Button
            type="button"
            onClick={(e) => {
              handleSearchDrawerOpen();
            }}
            bgColor="bg-primary"
            textColor="text-white"
          >
            <span className="flex flex-row space-x-3">
              <span>View Report</span>
            </span>
          </Button>
        </div>
      </div>
      <RightDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        <CreateReport onClose={handleDrawerClose} />
      </RightDrawer>
      <RightDrawer
        isOpen={isSearchDrawerOpen}
        onClose={handleSearchDrawerClose}
      >
        <ReportDetails onClose={handleSearchDrawerClose} />
      </RightDrawer>
    </div>
  );
};

export default Home;
