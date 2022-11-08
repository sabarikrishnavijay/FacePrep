import React, { useContext } from 'react';
import AuthContext from './context/AuthContext'
import { Navigate } from "react-router-dom";




function ProtectedRoute({ children }) {
  
  const user = localStorage.getItem('user');

  if (!user) {
   return <Navigate to="/login" replace />;
 }
 return children;
};

export default ProtectedRoute;
