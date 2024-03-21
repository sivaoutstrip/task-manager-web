import React from 'react';

const Button = ({ name, type, onClick, disabled, size }) => {
  const buttonClassList = ['block',
    'border',
    'rounded-md',
    'px-4',
    'py-2',
    'my-2',
    'cursor-pointer',
    'disabled:cursor-default'];

  if (size !== 'small') {
    buttonClassList.push('min-w-full');
  }

  if (type === 'outlined') {
    const outlined = 'border-violet-700 bg-white text-violet-700 disabled:text-violet-500 disabled:border-violet-500 hover:bg-violet-700 hover:text-white'
    buttonClassList.push(outlined);
  } else {
    const contained = 'border-violet-700 bg-violet-700 text-white disabled:bg-violet-500 hover:bg-white hover:text-violet-700'
    buttonClassList.push(contained);
  }

  return (
    <button
      className={buttonClassList.join(' ')}
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}>
      {name || 'Submit'}
    </button>
  );
}

export default Button;
