import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Link from '../../components/Link';
import { signUpApi } from '../../lib/axios';

const Registrations = () => {
  const labelClass = 'pb-1'
  const inputClass = 'block border border-slate-500 rounded-md min-w-full p-2 mt-1 mb-4'
  const { register, handleSubmit } = useForm();
  const [processing, setProcessing] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setProcessing(true);
    signUpApi(data).then(result => {
      const token = result.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(result.data.user));
      navigate('/tasks');
      setErrors([]);
      setProcessing(false);
    }).catch(error => {
      setErrors(error.response.data);
      setProcessing(false);
    })
  };

  const renderError = (error, index) => <li className='pb-1' key={index}>{error}</li>;

  const renderErrorsData = (errors) => errors.map(renderError);

  const renderErrors = () => {
    if (errors && errors.length > 0) {
      return (
        <ul className='text-sm my-2 p-2 bg-red-100 text-red-500 border border-red-100 rounded-md'>{renderErrorsData(errors)}</ul>
      );
    }
    return <div />;
  }

  const renderAlert = () => {
    return (
      <ul className='text-sm p-4 bg-blue-100 text-blue-500 border border-blue-100 rounded-md'>
        <li>Password should atleast contain one alphabet, numeric and special chatacter.</li>
        <li>Password characters length should be between 8 and 32 characters.</li>
      </ul>
    );
  }

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={labelClass} htmlFor='email'>Enter your Email *</label>
        <input {...register('email')} type='email' className={inputClass} id='email' name='email' placeholder='Enter your Email' required />
        <label className={labelClass} htmlFor='password'>Enter your Password *</label>
        <input {...register('password')} type='password' className={inputClass} id='password' name='password' placeholder='Enter your Password' required minLength={8} maxLength={32} />
        <label className={labelClass} htmlFor='password_confirmation'>Enter your Password Confirmation *</label>
        <input {...register('password_confirmation')} className={inputClass} type='password' id='password_confirmation' name='password_confirmation' placeholder='Re-enter your Password' required minLength={8} maxLength={32} />
        {renderAlert()}
        <Button name={processing ? 'Signing-Up' : 'Sign Up'} type='submit' disabled={processing} />
        <Link name="Have an account, Sign In here" to='/sign-in' />
      </form>
    );
  }

  return (
    <div className='md:grid grid-cols-3 gap-2 pt-40'>
      <div />
      <div className='px-6'>
        <div className='text-3xl font-bold text-center mb-4'>Sign Up</div>
        {renderErrors()}
        {renderForm()}
      </div>
      <div />
    </div>
  );
}

export default Registrations;