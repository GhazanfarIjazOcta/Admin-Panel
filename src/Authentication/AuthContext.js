// import React, { createContext, useContext, useState } from "react";

// // Create an AuthContext
// const AuthContext = createContext();

// // Create a provider component
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState(null); // New state for user role

//   // const login = () => setIsAuthenticated(true);
//   // const logout = () => setIsAuthenticated(false);
//   // const setRoleCustomer = (role) => setuserRole(role);
 
//    // Accept role as a parameter and set userRole
//    const login = (role) => {
//     setIsAuthenticated(true);
//     setUserRole(role); // Ensure role is saved to userRole
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserRole(null); // Reset userRole on logout
//   };
  

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, login, logout ,  userRole }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from "react";

// Create an AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Initialize state with values from localStorage (if they exist)
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" // Convert to boolean
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  const [user_ID, setUser_ID] = useState(localStorage.getItem("user_ID"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  // Login function with role parameter
  const login = (role , user_ID , name) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUser_ID(user_ID);
    setUserName(userName);

    // Save to localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", name);
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUser_ID(null);
    setUserName(null);

    // Clear from localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user_ID");
    localStorage.removeItem("userName");
    
  };

  // This effect ensures that the state syncs with localStorage on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated") === "true";
    const storedRole = localStorage.getItem("userRole");
    const storedUser_ID = localStorage.getItem("user_ID");
    const storeduserName = localStorage.getItem("userName");

    if (storedAuth) {
      setIsAuthenticated(storedAuth);
      setUserRole(storedRole);
      setUser_ID(storedUser_ID);
      setUserName(storeduserName);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userRole , user_ID , userName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
