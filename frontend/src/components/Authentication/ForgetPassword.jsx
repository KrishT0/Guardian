import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import forgetPassword from '../../assets/forget-password.png';
import classes from './authentication.module.css';
import Modal from 'react-modal';
import OtpInput from './otp';
import { IoIosCloseCircle } from 'react-icons/io';

function ForgetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setOpenModal(true);
  };

  return (
    <section className={classes.container}>
      <div>
        <img src={forgetPassword} alt="forget image" />
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
      {openModal && (
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          ariaHideApp={false}
          className={classes.forgetModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            content: {
              width: '50%',
              height: '25rem',
              margin: 'auto',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
            },
          }}
        >
          <div className={classes.forgetContainer}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: 0,
                }}
                onClick={() => setOpenModal(false)}
              >
                <IoIosCloseCircle />
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0 2rem',
              }}
              className={classes.forgetModalContent}
            >
              <input
                type="email"
                placeholder="enter email"
                style={{
                  marginBottom: '1rem',
                  padding: '0.5rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              <OtpInput />
              <button
                style={{
                  padding: '0.5rem',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: 'black',
                  cursor: 'pointer',
                  color: 'white',
                }}
                type="submit"
                onClick={() => setOpenModal(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default ForgetPassword;
