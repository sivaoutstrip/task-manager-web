import React from 'react';

const Button = ({ name, type, onClick, disabled }) => {
  return (
    <button
      className='block min-w-full border rounded-md bg-yellow-700 text-white px-4 py-2 my-2 cursor-pointer disabled:bg-yellow-500 disabled:text-black disabled:cursor-default'
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}>
      {name || 'Submit'}
    </button>
  );
}

export default Button;
