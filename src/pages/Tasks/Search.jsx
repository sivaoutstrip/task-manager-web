import React from 'react';
import { listTaskApi } from '../../lib/axios';
import { useDispatch, useSelector } from 'react-redux';

import { setTasks } from '../../reducer';
import { notification } from '../../components/alert';

const SearchForm = () => {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(({ modal }) => modal.tasks);

  React.useEffect(() => {
    if (name && name.length > 1) {
      listTaskApi({ params: { q: { title_cont: name } } }).then(result => {
        dispatch(setTasks(result.data));
      }).catch(error => {
        console.error('Unable to get tasks by title', error.data);
        notification({ title: 'Unable to get tasks by title' });
      })
    }
  }, [name]);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  if (tasks && tasks.length > 2) {
    return (
      <form onChange={handleChange} className='my-2 py-2 min-w-full block'>
      <input value={name} type='text' name='name_cont' placeholder='Enter 2 or more character to search by title...' className='block min-w-full px-4 text-base py-1 border border-violet-400 rounded-full' />
    </form>
    );
  }
  return <div />;
}

export default SearchForm;
