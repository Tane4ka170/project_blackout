
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import homeimg from '../../images/home/Rectangle 1.png'
import { AdaptDiv, H2 } from 'pages/Home/Home.styled';
import { Texts, WrapForm, WrapperS } from './Register.styled';
import { ImgAuth } from 'components/RegisterForm/RegisterForm.styled';


export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <AdaptDiv>
          <WrapperS>
            <ImgAuth src={homeimg} alt="Main " />
            <WrapForm>
              <H2>Sign Up</H2>
              <Texts>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</Texts>
              <RegisterForm />
            </WrapForm>
          </WrapperS>
        </AdaptDiv>
      </div>
    </HelmetProvider>
  );
}
