// import React from 'react';
import PropTypes from "prop-types"
const Breadcrumb = ({ title }) => {
  return (
    <nav className="breadcrumb">
      {title && <span>{title}</span>}
    </nav>
  );
};
Breadcrumb.propTypes = {
  title: PropTypes.string
}
export default Breadcrumb;
