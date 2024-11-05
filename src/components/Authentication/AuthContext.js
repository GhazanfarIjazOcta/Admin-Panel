import React, { createContext, useContext, useState } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);



// import React, { createContext, useContext, useState } from 'react';
// import { saveTokenToLocalStorage, removeTokenFromLocalStorage , getTokenFromLocalStorage } from '../../Api/getTokenFromLocalStorage';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!getTokenFromLocalStorage());

//   const login = (token) => {
//     saveTokenToLocalStorage(token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     removeTokenFromLocalStorage();
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

