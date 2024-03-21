import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Label from '../../../components/Form/Label';
import Input from '../../../components/Form/Textarea';
import Textarea from '../../../components/Form/Textarea';
import Button from '../../../components/Button';
import { showTaskApi, updateTaskApi } from '../../../lib/axios';
import { notification } from '../../../components/alert';
import Spinner from '../../../components/Spinner';

const EditTaskForm = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm({});

  const [submitting, setSubmitting] = React.useState(false);
  const [processing, setProcessing] = React.useState(true);

  React.useEffect(() => {
    setProcessing(true);
    if (!taskId) {
      navigate('/tasks');
      notification({ title: 'Task not found' });
      setProcessing(false);
    } else {
      showTaskApi(taskId).then(result => {
        setValue('title', result.data.title);
        setValue('description', result.data.description);
        setValue('status', getStatusValue(result.data.status));
        setProcessing(false);
      }).catch(error => {
        console.error('Error on getting task data', error.response);
        notification({ title: 'Unable to get task, please try after sometime' });
        setProcessing(false);
      })
    }
  }, []);

  const getStatusValue = (statusLabel) => {
    if (statusLabel === 'To Do') {
      return 'to_do';
    }
    if (statusLabel === 'In Progress') {
      return 'in_progress';
    }
    if (statusLabel === 'Done') {
      return 'done';
    }
  }

  const navigateToTask = () => navigate('/tasks');

  const onSubmit = (values) => {
    setSubmitting(true);
    updateTaskApi({ id: taskId, data: values }).then(result => {
      reset({ title: '', description: '', status: 'to_do' });
      notification({ title: 'Task updated', icon: 'success' });
      setSubmitting(false);
      navigateToTask();
    }).catch(error => {
      const errorData = error?.response?.data?.message || 'Unable to update Task, pleas try after sometime!';
      notification({ title: errorData });
      setSubmitting(false);
    })
  };

  const renderForm = () => (
    <div className='w-4/5 m-auto pt-12 md:pt-20'>
      <div className='text-2xl font-bold text-center'>Edit Task</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type='text' name='title' placeholder="Enter your title *" required element={register('title')} />
        <Textarea name='description' placeholder="Enter your description *" element={register('description')} />
        <Label name='status' />
        <select className='block w-full p-2 border border-violet-500 rounded-md mb-6' id='status' name='status' {...register('status')}>
          <option value='to_do'>To Do</option>
          <option value='in_progress'>In Progress</option>
          <option value='done'>Done</option>
        </select>
        <div className='flex gap-4'>
          <Button buttonType='submit' name='Update Task' disabled={submitting} />
          <Button name='Cancel' type='outlined' onClick={navigateToTask} />
        </div>
      </form>
    </div>
  );

  const renderLoader = () => <Spinner text='Fetching your task...' />;

  return processing ? renderLoader() : renderForm();
}

export default EditTaskForm;
