
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import homeimg from '../../images/home/Rectangle 1.png'
import { H2, Text, Wrapper } from 'pages/Home/Home.styled';
import { WrapForm } from './Register.styled';


export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registrationdsfsdfsdfsd</title>
        </Helmet>
        <Wrapper>
          <img src={homeimg} alt="Main " />
          <WrapForm>
            <H2>Sign Up</H2>
            <Text>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</Text>
            <RegisterForm />
          </WrapForm>
        </Wrapper>
      </div>
    </HelmetProvider>
  );
}
