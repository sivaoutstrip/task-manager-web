import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Link from '../../components/Link';
import { signInApi } from '../../lib/axios';
import Input from '../../components/Form/Input';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [processing, setProcessing] = React.useState(false);
  const [error, setError] = React.useState(undefined);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setProcessing(true);
    signInApi(data).then(result => {
      const token = result.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(result.data.user));
      navigate('/tasks');
      setError(undefined);
      setProcessing(false);
    }).catch(error => {
      setError(error?.response?.data?.message || 'Invalid credentials');
      setProcessing(false);
    })
  };

  const renderError = () => {
    if (error) {
      return (
        <div className='text-sm text-center my-2 p-2 bg-red-100 text-red-500 border border-red-100 rounded-md'>
          {error}
        </div>
      );
    }
    return <div />;
  }

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type='email' name='email' placeholder="Enter your email address *" required element={register('email')} />
        <Input type='password' name='password' placeholder="Enter your Password *" required element={register('password')} />
        <Button name={processing ? 'Signing-in' : 'Sign In'} buttonType='submit' disabled={processing} />
        <Link name="Don't have an account, Sign Up here" to='/' />
      </form>
    );
  }

  return (
    <div className='md:grid grid-cols-3 gap-2 pt-40'>
      <div />
      <div className='px-6'>
        <div className='text-3xl font-bold text-center mb-4'>Sign In</div>
        {renderError()}
        {renderForm()}
      </div>
      <div />
    </div>
  );
}

export default SignIn;