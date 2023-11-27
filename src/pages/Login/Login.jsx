
import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AdaptDiv, H2 } from 'pages/Home/Home.styled';
import homeimg from '../../images/home/Rectangle 1.png'
import { Texts, WrapForm, WrapperS } from 'pages/Register/Register.styled';
import { ImgAuth } from 'components/RegisterForm/RegisterForm.styled';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <AdaptDiv>
          <WrapperS>
            <ImgAuth src={homeimg} alt="Main " />
            <WrapForm>
              <H2>Sign Up</H2>
              <Texts>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</Texts>
              <LoginForm />
            </WrapForm>
          </WrapperS>
        </AdaptDiv>
      </div>
    </HelmetProvider >
  );
}
