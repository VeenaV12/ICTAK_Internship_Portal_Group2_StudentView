import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');
  const verifyUser = !!token; // Simplified
  return verifyUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
