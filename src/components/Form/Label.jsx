import React from 'react';

const Label = ({ htmlFor, name }) => {
  const labelClass = 'pb-1'

  return (
    <label className={labelClass} htmlFor={htmlFor}>{name}</label>
  );
}

export default Label;