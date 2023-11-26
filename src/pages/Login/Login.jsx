
import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { H2, Text, Wrapper } from 'pages/Home/Home.styled';
import homeimg from '../../images/home/Rectangle 1.png'
import { WrapForm } from 'pages/Register/Register.styled';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <Wrapper>
          <img src={homeimg} alt="Main " />
          <WrapForm>
            <H2>Sign Up</H2>
            <Text>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</Text>
            <LoginForm />
          </WrapForm>
        </Wrapper>
      </div>
    </HelmetProvider >
  );
}
