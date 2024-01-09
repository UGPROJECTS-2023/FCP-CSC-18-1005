// UserContext.js
import React, { createContext, useState } from 'react';

// Create a context to manage user data
export const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  // State to hold user data
  const [userData, setUserData] = useState({});

  // Function to update user data on login
  const  userLogin = (userData) => {
    setUserData(userData);
  };

  // Function to logout and clear user data
  const logout = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        userLogin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
