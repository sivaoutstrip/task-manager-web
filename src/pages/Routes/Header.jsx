import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import tmLogo from '../../images/tm-logo-100x100.jpeg';
import { question } from '../../components/alert';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    question({ title: `Are you sure to Logout?` }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/sign-in');
      }
    });
  }

  const renderLogoContent = () => (
    <div className='flex items-center'>
      <img src={tmLogo} alt="Task manager app logo" className='h-14 border rounded-full' />
      <p className='hidden md:inline-block text-2xl font-semibold pl-3 text-violet-700'>Task Manager</p>
    </div>
  );

  const renderLogoutContent = () => (
    <Button name='Logout' size='small' type='outlined' onClick={handleLogout} />
  );

  return (
    <header className='h-15 p-4 flex justify-between items-center border-b border-b-violet-700'>
      {renderLogoContent()}
      {renderLogoutContent()}
    </header>
  );
}

export default Header;
