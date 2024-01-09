import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import PropTypes from 'prop-types';

const RightDrawer = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 z-50 flex items-center justify-end bg-black bg-opacity-50">
          <div className="bg-white w-full h-full md:h-screen shadow-lg overflow-y-auto">
            <div className="flex justify-end p-4">
              <button onClick={handleClose} className="text-white bg-primary rounded-full p-2">
                <MdOutlineClose />
              </button>
            </div>
            <div className="py-4 px-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

RightDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default RightDrawer;
