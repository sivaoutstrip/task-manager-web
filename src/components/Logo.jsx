import React from 'react';

import tmLogo from '../images/tm-logo-100x100.jpeg';

const Logo = () => (
  <div className='hidden md:flex justify-center items-center mb-3'>
    <img src={tmLogo} alt='Task Manager Logo' className='border rounded-full' />
  </div>
);

export default Logo;
