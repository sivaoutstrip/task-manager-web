import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '../../components/Button';

import tmLogo from '../../images/tm-logo-100x100.jpeg';

const ClientRoute = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      showCancelButton: true,
      icon: "question",
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/sign-in');
      }
    });
  }

  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to='/' replace />
  } else {
    return (
      <>
        <header className='min-h-16 p-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <img src={tmLogo} alt="Task manager app logo" className='max-h-14 border rounded-full' />
            <p className='hidden md:inline-block text-2xl font-semibold pl-3'>Task Manager</p>
          </div>
          <div>
            <Button name='Logout' onClick={handleLogout} />
          </div>
        </header>
        <main className='min-h-[calc(100%_-_16rem)] overflow-auto'>{children}</main>
      </>
    );
  };
}

export default ClientRoute;
