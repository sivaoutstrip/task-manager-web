import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button';
import Link from '../../components/Link';
import { signUpApi } from '../../lib/axios';
import Input from '../../components/Form/Input';
import Logo from '../../components/Logo';

const Registrations = () => {
  const { register, handleSubmit } = useForm();
  const [processing, setProcessing] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setProcessing(true);
    signUpApi(data).then(result => {
      const token = result.data.token;
      if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = token;
      }
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
        <Input type='email' name='email' placeholder="Enter your email address *" required element={register('email')} />
        <Input type='password' name='password' placeholder="Enter your Password *" required element={register('password')} />
        <Input type='password' name='password_confirmation' placeholder="Re-enter your Password" required element={register('password_confirmation')} />
        {renderAlert()}
        <Button name={processing ? 'Signing-Up' : 'Sign Up'} buttonType='submit' disabled={processing} />
        <Link name="Have an account, Sign In here" to='/sign-in' />
      </form>
    );
  }

  return (
    <div className='md:grid grid-cols-3 gap-2 pt-10'>
      <div />
      <div className='px-6'>
        <Logo />
        <div className='text-3xl font-bold text-center mb-4'>Sign Up</div>
        {renderErrors()}
        {renderForm()}
      </div>
      <div />
    </div>
  );
}

export default Registrations;