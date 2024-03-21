import React from 'react';
import { useDispatch } from 'react-redux'

import { openModal } from '../../reducer'
import Button from '../../components/Button';

const TaskHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center'>
      <p className='text-2xl text-violet-700 font-bold'>Tasks</p>
      <Button size='small' onClick={() => dispatch(openModal())} name='New Task' />
    </div>
  );
}

export default TaskHeader;