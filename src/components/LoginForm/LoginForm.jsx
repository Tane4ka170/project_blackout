import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


import { loginThunk } from 'components/redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFinish = ({ email, password }) => {
    dispatch(loginThunk({ email, password }));

  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password } = e.target.elements;
  //   if (email.value.trim() === '' || password.value.trim() === '') {
  //     return toast.error('Please fill in all fields');
  //   }
  //   dispatch(logIn({ email: email.value, password: password.value }));
  //   e.target.reset();
  // };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>

    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <Text>Email</Text>
    //   <Input type="email" name="email" placeholder="Enter email" />
    //   <Text>Password</Text>
    //   <Input type="password" name="password" placeholder="Enter password" />
    //   <Button type="submit">Log In</Button>
    // </Form>
  );
};

export default LoginForm;
