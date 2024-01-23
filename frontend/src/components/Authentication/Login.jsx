import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './authentication.module.css';
import { useForm, Controller } from 'react-hook-form';

function Login({ setAuthMode }) {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function signUpHandler(e) {
    e.preventDefault();
    setAuthMode('signup');
  }

  function forgetPasswordHandler() {
    navigate('/forget-password');
  }

  return (
    <form className={classes.loginform} onSubmit={handleSubmit(onSubmit)}>
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
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Master Password</label>
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field }) => <input type="password" {...field} />}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button className={classes.tpButton} type="submit">
        Login
      </button>
      <p>
        Already registered !
        <button className={classes.btn} onClick={signUpHandler}>
          Sign Up
        </button>
      </p>
      <p className={classes.forget} onClick={forgetPasswordHandler}>
        Forgot password
      </p>
    </form>
  );
}

export default Login;
