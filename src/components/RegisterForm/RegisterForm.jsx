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













// import { useDispatch, useSelector } from 'react-redux';
// import 'antd/dist/reset.css';

// import { ConfigProvider, Form, Input } from 'antd';
// // import Register from 'pages/Register/Register';
// import { registerThunk } from 'components/redux/auth/operations';
// import { ButtonSign, Inputs, StyledInput, StyledInputP, StyledPasswordInput } from './RegisterForm.styled';
// // import 'antd/dist/antd.css'; // Переконайтеся, що ви підключили стилі Ant Design

// const customTheme = {
//   'input-bg': '#0c0d0d',
//   // background- color: #0c0d0d, // Зміна фону інпута
//   // Додайте інші налаштування теми за потребою
// };

// const RegisterForm = () => {
//   const [form] = Form.useForm();
//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector(state => state.auth);

//   const onFinish = values => {
//     const { name, email, password, confirm } = values;

//     if (password === confirm) {
//       dispatch(registerThunk({ name, email, password }));
//       !isLoading && !error && form.resetFields();
//     }
//   };

//   const formItemLayout = {
//     labelCol: {
//       span: 24,
//     },
//     wrapperCol: {
//       span: 24,
//     },
//   };

//   const tailFormItemLayout = {
//     wrapperCol: {
//       xs: {
//         span: 24,
//         offset: 0,
//       },
//       sm: {
//         span: 16,
//         offset: 4,
//       },
//     },
//   };
//   return (
//     <ConfigProvider theme={customTheme}>
//       <Form
//         {...formItemLayout}
//         form={form}
//         name="register"
//         onFinish={onFinish}
//         size={'default'}
//         initialValues={{
//           residence: ['zhejiang', 'hangzhou', 'xihu'],
//           prefix: '86',
//         }}
//         style={{
//           width: 300,
//         }}
//         scrollToFirstError
//       >
//         <Form.Item
//           name="name"
//           // label="Name"

//           tooltip="What do you want others to call you?"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your name!',
//               whitespace: true,
//             },
//           ]}
//         >
//           <StyledInput placeholder="Name" />
//           {/* <StyledInput placeholder="Name" /> */}


//           {/* <Inputs placeholder="Name" type="text" /> */}

//         </Form.Item>
//         <Form.Item
//           name="email"
//           // label="E-mail"
//           rules={[
//             {
//               type: 'email',
//               message: 'The input is not valid E-mail!',
//             },
//             {
//               required: true,
//               message: 'Please input your E-mail!',
//             },
//           ]}
//         >
//           <StyledInput placeholder="Enter your E-mail" />
//           {/* <Inputs placeholder="Enter your E-mail" type="email" /> */}
//         </Form.Item>

//         <Form.Item
//           name="password"
//           // label="Password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//           hasFeedback
//         >
//           <StyledPasswordInput placeholder="Enter your password" />
//         </Form.Item>

//         <Form.Item
//           name="confirm"
//           // label="Confirm Password"
//           dependencies={['password']}
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: 'Please confirm your password!',
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(
//                   new Error('The new password that you entered do not match!')
//                 );
//               },
//             }),
//           ]}
//         >
//           <StyledPasswordInput placeholder="Confirm Password" />
//         </Form.Item>


//         <Form.Item {...tailFormItemLayout}>
//           <ButtonSign $htmltype="submit">
//             Sign Up
//           </ButtonSign>
//         </Form.Item>
//       </Form>
//     </ConfigProvider>
//   );
// };

export default RegisterForm;
