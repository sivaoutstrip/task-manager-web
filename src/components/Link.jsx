import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ name, to }) => {
  return <Link to={to} className='block min-w-full border rounded-md border-yellow-700 text-yellow-700 px-4 py-2 my-2 cursor-pointer text-center'>{name || 'Link'}</Link>
}

export default CustomLink;
