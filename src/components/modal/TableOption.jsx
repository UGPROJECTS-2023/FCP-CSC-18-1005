import React from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const TableOption = ({ children, icon }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClick = () => {
    setAnchorEl(null); // Close the menu after an option is clicked
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
        onClick={handleClick}
        className={Boolean(anchorEl) ? 'btn p-0 dropdown-toggle hide-arrow show' : 'btn p-0 dropdown-toggle hide-arrow'}
      >
        {icon ?? <i className="bx bx-dots-vertical-rounded"></i>}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="bg-gray-50 text-gray-500 dark:text-gray-100 dark:bg-gray-800 my-0 py-0">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => {
                handleOptionClick();
                if (child.props.onClick) {
                  child.props.onClick();
                }
              },
            })
          )}
        </div>
      </Menu>
    </div>
  );
};

TableOption.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
};

export default TableOption;
