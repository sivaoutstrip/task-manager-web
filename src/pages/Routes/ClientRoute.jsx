import React from 'react';
import { Navigate } from 'react-router-dom';

const ClientRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to='/' replace />
  } else {
    return children;
  };
}

export default ClientRoute;
