import React from 'react';
import Swal from 'sweetalert2';

import Button from '../../components/Button';
import { listTaskApi } from '../../lib/axios';

const Tasks = () => {
  const [processing, setProcessing] = React.useState(true);
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    listTaskApi().then(result => {
      setTasks(result.data);
      setProcessing(false);
    }).catch(error => {
      console.error('Error on getting task data', error.response);
      Swal.fire('Unable to get tasks, please try after sometime');
    })
  }, []);

  const renderHeader = () => (
    <div className='flex justify-between items-center'>
      <p className='text-2xl text-violet-700 font-bold'>Tasks</p>
      <Button size='small' onClick={() => console.log('hello')} name='New Task' />
    </div>
  );

  const renderSpinner = () => (
    <div className='min-h-80 flex items-center justify-center'>
      <p className='text-md text-violet-700'>Getting your tasks...</p>
    </div>
  );

  const renderNoData = () => (
    <div className='min-h-80 flex items-center justify-center'>
      <div className='text-center'>
        <p className='text-md text-violet-700'>There are no tasks...</p>
        <Button name='Create a new task' type='outlined' size='small' />
      </div>
    </div>
  );

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
    return (
      <div className={`inline-block mt-4 px-2 py-1 text-sm s-1 text-${color}-700 bg-${color}-100 border rounded-md border-${color}-100`}>{status}</div>
    );
  }

  const renderTask = (task) => (
    <div key={task.id} className='border rounded-md border-violet-100 p-4'>
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

  const renderTable = () => (
    <div className='grid md:grid-cols-4 gap-2'>
      {tasks.map(renderTask)}
    </div>
  );

  const renderContent = () => {
    if (tasks && tasks.length > 0) {
      return renderTable();
    }
    return renderNoData();
  }

  const renderTaskLoader = () => {
    if (processing) {
      return renderSpinner();
    }
    return renderContent();
  }

  return (
    <div className='p-4'>
      {renderHeader()}
      {renderTaskLoader()}
    </div>
  );
}

export default Tasks;
