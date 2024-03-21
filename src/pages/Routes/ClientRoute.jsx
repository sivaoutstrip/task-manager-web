import React from 'react';
import { Navigate } from 'react-router-dom';

import Header from './Header';

const ClientRoute = ({ children }) => {
  const renderChildren = () => (
    <>
      <Header />
      <main className='min-h-[calc(100%_-_16rem)] overflow-auto'>{children}</main>
    </>
  );

  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to='/' replace />
  } else {
    return renderChildren();
  };
}

export default ClientRoute;
