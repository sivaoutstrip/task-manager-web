import React from 'react';
import { useDispatch } from 'react-redux'

import { openModal } from '../../reducer'
import Button from '../../components/Button';
import Filter from './Filter';

const TaskHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex sm:justify-between items-center flex-col sm:flex-row'>
      <div className='flex items-center'>
        <p className='hidden sm:block text-2xl text-violet-700 font-bold mr-3'>Tasks</p>
        <Filter />
      </div>
      <Button size='small' onClick={() => dispatch(openModal())} name='New Task' />
    </div>
  );
}

export default TaskHeader;