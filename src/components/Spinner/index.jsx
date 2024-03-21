import React from 'react';

const Spinner = ({ text }) => (
  <div className='min-h-80 flex items-center justify-center'>
    <p className='text-md text-violet-700'>{text}</p>
  </div>
);

export default Spinner;