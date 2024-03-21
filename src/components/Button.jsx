import React from 'react';

const Button = ({ name, type, onClick, disabled }) => {
  return (
    <button
      className='block min-w-full border rounded-md border-violet-700 bg-violet-700 text-white px-4 py-2 my-2 cursor-pointer disabled:bg-violet-500 disabled:cursor-default hover:bg-white hover:text-violet-700'
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}>
      {name || 'Submit'}
    </button>
  );
}

export default Button;
