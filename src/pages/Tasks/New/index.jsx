import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import Modal from '../../../components/Modal';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';
import Button from '../../../components/Button';
import Label from '../../../components/Form/Label';
import { closeModal, addTask } from '../../../reducer';
import { createTaskApi } from '../../../lib/axios';

const NewForm = () => {
  const [submitting, setSubmitting] = React.useState(false);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setSubmitting(true);
    createTaskApi(values).then(result => {
      dispatch(addTask(result.data));
      dispatch(closeModal());
      Swal.fire('New Task created');
      setSubmitting(false);

    }).catch(error => {
      const errorData = error?.response?.data?.message || 'Unable to create Task, pleas try after sometime!';
      Swal.fire(errorData);
      setSubmitting(false);
    })
  };

  return (
    <Modal title='New Task'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type='text' name='title' placeholder="Enter your title *" required element={register('title')} />
        <Textarea name='description' placeholder="Enter your description *" required element={register('description')} />
        <Label name='status' />
        <select className='block w-full p-2 border border-violet-500 rounded-md mb-6' id='status' name='status' {...register('status')}>
          <option value='to_do'>To Do</option>
          <option value='in_progress'>In Progress</option>
          <option value='done'>Done</option>
        </select>
        <div className='flex gap-4'>
          <Button buttonType='submit' name='Create Task' disabled={submitting} />
          <Button name='Cancel' type='outlined' onClick={() => dispatch(closeModal())} />
        </div>
      </form>
    </Modal>
  );
};

export default NewForm;