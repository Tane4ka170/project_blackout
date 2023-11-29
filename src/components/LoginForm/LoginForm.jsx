import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginThunk } from 'redux/auth/operations';

import {
  ButtonSign,
  Err,
  Line,
  PasswordMessage,
  PasswordToggle,
  Spn,
  StyledInput,
  StyledPasswordInput,
  WrapInPass,
  WrapInp,
  WrapPassword,
} from 'components/RegisterForm/RegisterForm.styled';

import { ReactComponent as ShowsIco } from '../../images/home/eye.svg';
import { ReactComponent as HideIco } from '../../images/home/eye-off.svg';
import { WrapBts } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors: formErrors },
  } = useForm();

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
  const [password, setPassword] = useState('');
  const isPasswordValid = () => {
    return password.length >= 6 && !formErrors.password;
  };

  const handlePasswordChange = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValue('password', newPassword);
  };

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
          <WrapInPass>
            <StyledPasswordInput
              {...register('password', {
                required: 'Enter a valid Password',
                minLength: {
                  value: 6,
                  // message: 'Make sure your password is at least 6 characters long',
                },
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              autoComplete="new-password"
              // hasError={!!formErrors.password}
              onChange={handlePasswordChange}
              // isGood={password.length >= 6}
              className={`${
                password.length === 0
                  ? 'empty'
                  : isPasswordValid()
                  ? 'valid'
                  : 'invalid'
              }`}
            />
            <PasswordToggle onClick={togglePasswordVisibility} type="button">
              {showPassword ? <HideIco /> : <ShowsIco />}
            </PasswordToggle>
          </WrapInPass>
          {formErrors.password && password.length === 0 && (
            <Err>{formErrors.password.message}</Err>
          )}
          {password.length > 0 && (
            <PasswordMessage $isGood={password.length >= 6}>
              {password.length >= 6 ? 'Good password' : 'Short password'}
            </PasswordMessage>
          )}
        </WrapPassword>

        <WrapBts>
          <ButtonSign>Sign In</ButtonSign>
        </WrapBts>

        <Line>
          <p>New here?</p>
          <Link to={'/register'}>
            <Spn>Create an account</Spn>{' '}
          </Link>
        </Line>
      </WrapInp>
    </form>
  );
};

export default LoginForm;
