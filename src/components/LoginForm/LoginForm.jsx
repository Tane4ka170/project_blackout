import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  ButtonSign,
  Err,
  Line,
  PasswordToggle,
  StyledInput,
  StyledPasswordInput,
  WrapBt,
  WrapInp,
  WrapPassword,
} from 'components/RegisterForm/RegisterForm.styled';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { ReactComponent as ShowsIco } from '../../images/home/eye.svg';
import { ReactComponent as HideIco } from '../../images/home/eye-off.svg';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
  } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .catch(error => {
        toast.error('Invalid email or password');
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapInp>
        <div>
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
          {formErrors.email && <Err>{formErrors.email.message}</Err>}
        </div>

        <WrapPassword>
          <StyledPasswordInput
            {...register('password', {
              required: 'Please enter your password',
              minLength: {
                value: 6,
                message:
                  'Make sure your password is at least 6 characters long',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="new-password"
          />
          <PasswordToggle onClick={togglePasswordVisibility} type="button">
            {showPassword ? <HideIco /> : <ShowsIco />}
          </PasswordToggle>
          {formErrors.password && <Err>{formErrors.password.message}</Err>}
        </WrapPassword>

        <WrapBt>
          <ButtonSign>Sign in</ButtonSign>
        </WrapBt>

        <Line>
          New here? <Link to={'/register'}>Create an account</Link>
        </Line>
      </WrapInp>
    </form>
  );
};

export default LoginForm;
