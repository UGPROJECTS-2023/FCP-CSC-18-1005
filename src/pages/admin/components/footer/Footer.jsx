// import React from 'react';
import { MdCopyright } from 'react-icons/md';

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4">
      <div className="flex items-center">
        <MdCopyright />
        <p>Bellmonie {getCurrentYear()}</p> {/* Add the current year */}
      </div>
      <p>Privacy Policy</p>
    </div>
  );
}

export default Footer;
