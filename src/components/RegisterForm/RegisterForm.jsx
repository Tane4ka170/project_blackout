import { registerThunk } from 'components/redux/auth/operations';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonSign, Err, Line, PasswordToggle, StyledInput, StyledPasswordInput, WrapBt, WrapInp, WrapPassword } from './RegisterForm.styled';
import { ReactComponent as ShowsIco } from '../../images/home/eye.svg'
import { ReactComponent as HideIco } from '../../images/home/eye-off.svg'


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
  } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .catch(error => {
        toast.error('Invalid email or email already exists in the database');
      });
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

      <WrapInp>
        <div>
          <StyledInput
            {...register('name', {
              required: 'Please provide your name',
              minLength: {
                value: 3,
                message: 'Please enter a name with at least 3 characters',
              },
            })}
            type="text"
            placeholder="Name"
            autoComplete="new-name"
          />
          {formErrors.name && (
            <Err >{formErrors.name.message}</Err>
          )}
        </div>
        <div >

          <StyledInput
            defaultValue=""
            {...register('email', {
              required: 'Please provide your email',
              minLength: {
                value: 6,
                message: 'Ensure your email is at least 6 characters long',
              },
            })}
            type="email"
            placeholder="Email"
            autoComplete="new-email"

          />
          {formErrors.email && (
            <Err >{formErrors.email.message}</Err>
          )}
        </div>
        <WrapPassword >

          <StyledPasswordInput
            {...register('password', {
              required: 'Please enter your password',
              minLength: {
                value: 6,
                message: 'Make sure your password is at least 6 characters long',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="new-password"
            hasError={!!formErrors.password}

          />
          <PasswordToggle onClick={togglePasswordVisibility} type="button">
            {showPassword ? (
              <HideIco />
            ) : (
              <ShowsIco />
            )}
          </PasswordToggle>
          {formErrors.password && (
            <Err >{formErrors.password.message}</Err>
          )}
        </WrapPassword>
        <WrapBt >
          <ButtonSign >Sign up</ButtonSign>
        </WrapBt>

        <Line >
          Have an account already? <Link to={'/login'}>Log in now</Link>
        </Line>
      </WrapInp>
    </form>
  );
};
export default RegisterForm;
