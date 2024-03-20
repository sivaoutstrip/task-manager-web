import React from 'react';
import { useForm } from "react-hook-form";


const SignIn = () => {
  const labelClass = 'pb-1'
  const inputClass = 'block border border-slate-500 rounded-md min-w-full p-2 mt-1 mb-4'
  const { register, handleSubmit } = useForm();

  console.log('env', process.env.REACT_APP_API_URL)
  const onSubmit = (data) => {

  };

  return (
    <div className='md:grid grid-cols-3 gap-2 pt-40'>
      <div />
      <div className='px-6'>
        <div className='text-3xl font-bold text-center mb-4'>Sign In</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={labelClass} htmlFor='email'>Enter your Email *</label>
        <input {...register('email')} type='email' className={inputClass} id='email' name='email' placeholder='Enter your Email' required />
        <label className={labelClass} htmlFor='password'>Enter your Password *</label>
        <input {...register('password')} type='password' className={inputClass} id='password' name='password' placeholder='Enter your Password' required />
        <label className={labelClass} htmlFor='passwordConfirmation'>Enter your Password Confirmation *</label>
        <input {...register('passwordConfirmation')} className={inputClass} type='password' id='passwordConfirmation' name='passwordConfirmation' placeholder='Re-enter your Password' required />
        <button type='submit'>Sign up</button>
      </form>
      </div>
      <div />
    </div>
  );
}

export default SignIn;