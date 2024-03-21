import React from 'react';

import Label from './Label';

const Input = ({ name, placeholder, required, element }) => {
  const inputClass = 'block border border-violet-500 rounded-md min-w-full p-2 mt-1 mb-4'
  const renderInput = () => {
    return <textarea {...element} className={inputClass} id={name} name={name} placeholder={placeholder} required={required} />;
  }

  return (
    <>
      <Label name={name} htmlFor={name} />
      {renderInput()}
    </>
  );
}

export default Input;
