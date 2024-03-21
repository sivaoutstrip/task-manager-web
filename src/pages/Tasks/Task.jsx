import React from 'react';

const Task = ({ task }) => {

  const getColor = (status) => {
    if (status === 'In Progress') {
      return 'orange';
    }
    if (status === 'Done') {
      return 'green';
    }
    return 'violet';
  }

  
  const renderTaskStatus = (status) => {
    const color = getColor(status);
    const statusClass = `inline-block mt-4 px-2 py-1 text-sm s-1 text-${color}-700 bg-${color}-100 border rounded-md border-${color}-100`;
    return <div className={statusClass}>{status}</div>;
  }

  return (
    <div className='border rounded-md border-violet-100 p-4'>
      <div className='text-xl font-bold'>{task.title}</div>
      {renderTaskStatus(task.status)}
      <p className='pt-4 text-sm text-slate-400'>Description</p>
      <div className='h-32 overflow-auto'>{task.description}</div>
      <div className='flex justify-end items-center'>
        <button className='mr-3 px-3 py-1 text-sm border rounded-md border-gray-400 bg-gray-400 text-white cursor-pointer'>Edit</button>
        <button className='px-3 py-1 text-sm border rounded-md border-red-500 text-red-500 cursor-pointer'>Delete</button>
      </div>
    </div>
  );
}

export default Task;
