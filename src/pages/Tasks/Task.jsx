import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeTask } from '../../reducer';
import { deleteTaskApi } from '../../lib/axios';
import { notification, question } from '../../components/alert';


const Task = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTask = () => {
    question({
      title: `Are you sure to delete ${task.title}?`,
      text: 'This process is irreversible'
    }).then(result => {
      if (result.isConfirmed) {
        deleteTaskApi(task.id).then(result => {
          dispatch(removeTask(result.data.id));
          notification({ title: 'Task removed!' });
        })
      }
    })
  }

  const routeToEditTask = () => {
    navigate(`/tasks/${task.id}/edit`);
  }

  const getColor = (status) => {
    if (status === 'In Progress') {
      return `text-orange-700 bg-orange-100 border rounded-md border-orange-100`;
    }
    if (status === 'Done') {
      return `text-green-700 bg-green-100 border rounded-md border-green-100`;
    }
    return `text-violet-700 bg-violet-100 border rounded-md border-violet-100`;
  }


  const renderTaskStatus = (status) => {
    const color = getColor(status);
    const statusClass = `inline-block mt-4 px-2 py-1 text-sm s-1 ${color}`;
    return <div className={statusClass}>{status}</div>;
  }

  return (
    <div className='border rounded-md border-violet-100 p-4'>
      <div className='text-xl font-bold'>{task.title}</div>
      {renderTaskStatus(task.status)}
      <p className='pt-4 text-sm text-slate-400'>Description</p>
      <div className='h-32 overflow-auto'>{task.description}</div>
      <div className='flex justify-end items-center'>
        <button className='mr-3 px-3 py-1 text-sm border rounded-md border-gray-400 bg-gray-400 text-white cursor-pointer' onClick={routeToEditTask}>Edit</button>
        <button className='px-3 py-1 text-sm border rounded-md border-red-500 text-red-500 cursor-pointer' onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
