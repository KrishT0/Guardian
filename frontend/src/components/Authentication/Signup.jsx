import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import classes from './authentication.module.css';

function Signup({ setAuthMode }) {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    // Add your signup logic here
  }

  function loginHandler(e) {
    e.preventDefault();
    setAuthMode('login');
  }

  return (
    <form className={classes.signUpform} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: 'Name is required' }}
        render={({ field }) => <input type="text" {...field} />}
      />
      {errors.name && <p className={classes.error}>{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => <input type="text" {...field} />}
      />
      {errors.email && <p className={classes.error}>{errors.email.message}</p>}

      <label htmlFor="password">Master Password</label>
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field }) => <input type="password" {...field} />}
      />
      {errors.password && (
        <p className={classes.error}>{errors.password.message}</p>
      )}

      <button type="submit" className={classes.tpButton}>
        SignUp
      </button>
      <p>
        Already have an account !
        <button className={classes.btn} onClick={loginHandler}>
          Log in
        </button>
      </p>
    </form>
  );
}

export default Signup;
