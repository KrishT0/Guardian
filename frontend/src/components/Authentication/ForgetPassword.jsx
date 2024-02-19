import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import forgetPassword from '../../assets/forget-password.png';
import classes from './authentication.module.css';

function ForgetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={classes.container}>
      <div>
        <img src={forgetPassword} alt="" />
      </div>
      <div>
        <form className={classes.forgetForm} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="forget-password-email">Email</label>
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
          {errors.email && (
            <p className={classes.error}>{errors.email.message}</p>
          )}

          <button type="submit">Send email</button>
        </form>
      </div>
    </section>
  );
}

export default ForgetPassword;
