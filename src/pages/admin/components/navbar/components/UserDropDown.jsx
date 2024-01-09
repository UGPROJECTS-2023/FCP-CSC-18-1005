import { useState, useEffect, useRef } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const UserDropDown = () => {
  const [isDown, setIsDown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDown(false);
    }
  };

  const toggleDropdown = () => {
    setIsDown(!isDown);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  
  return (
    <div className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
        className="w-10 h-10 bg-gray-50 shadow-sm border-2 border-primary rounded-full cursor-pointer"
      >
        {/* You can add an icon or text here to indicate the dropdown */}
      </div>
      {isDown && (
        <div
          ref={dropdownRef}
          className="absolute flex flex-col space-y-3 top-12 right-0 w-40 h-32 bg-gray-50 shadow-lg rounded-lg py-4 px-2 z-50"
        >
         <div>
  {user && (
    <p className="flex flex-row space-x-2 text-md text-dark">
      <span className="font-semibold text-md">Name:</span>
      <span>{user.name}</span>
    </p>
  )}
</div>

          <ul className="flex flex-col space-y-4">
            <li className="flex flex-row space-x-4 cursor-pointer">
              <span>
                <AccountCircleIcon className="text-primary" sx={{ fontSize: 25, color: 'primary', cursor: 'pointer' }} />
              </span>
              <span className="text-md cursor-pointer">View Profile</span>
            </li>
            <li onClick={logout} className="flex flex-row space-x-4 cursor-pointer">
              <span>
                <ExitToAppIcon className="text-primary" sx={{ fontSize: 25, color: 'primary', cursor: 'pointer' }} />
              </span>
              <span className="text-md cursor-pointer">Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
