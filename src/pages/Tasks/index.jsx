import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../components/Spinner';
import DataNotFound from '../../components/DataNotFound';
import Button from '../../components/Button';
import { listTaskApi } from '../../lib/axios';
import TaskHeader from './TaskHeader';
import Task from './Task';
import New from './New';

import { setTasks } from '../../reducer';

const Tasks = () => {
  const [processing, setProcessing] = React.useState(true);

  const tasks = useSelector(({ modal }) => modal.tasks);

  const dispatch = useDispatch();

  React.useEffect(() => {
    listTaskApi().then(result => {
      dispatch(setTasks(result.data));
      setProcessing(false);
    }).catch(error => {
      console.error('Error on getting task data', error.response);
      Swal.fire('Unable to get tasks, please try after sometime');
    })
  }, []);

  const renderTask = (task) => <Task key={task.id} task={task} />

  const renderTaskList = () => (
    <div className='grid md:grid-cols-4 gap-2'>
      {tasks.map(renderTask)}
    </div>
  );

  const renderDataNotFound = () => (
    <DataNotFound>
      <div className='text-center'>
        <p className='text-md text-violet-700'>No task created...</p>
        <Button name='Create a new task' type='outlined' size='small' />
      </div>
    </DataNotFound>
  );

  const renderContent = () => {
    if (tasks && tasks.length > 0) {
      return renderTaskList();
    }
    return renderDataNotFound();
  }

  const renderTaskLoader = () => {
    if (processing) {
      return <Spinner text='Getting your tasks...' />;
    }
    return renderContent();
  }

  return (
    <div className='p-4 mb-40'>
      <TaskHeader />
      {renderTaskLoader()}
      <New />
    </div>
  );
}

export default Tasks;
