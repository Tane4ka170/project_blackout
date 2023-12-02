import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { TotalIncome } from 'shared/Total';

import { AdaptDiv, H2 } from 'pages/Home/Home.styled';
import {
  PlugDivs,
  TableDivs,
  Texts,
  WrapForm,
  WrapperS,
} from './Register.styled';
import { ImgAuth } from 'components/RegisterForm/RegisterForm.styled';

import homeimg from '../../images/home/Rectangle 1x.png';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectUser } from 'redux/user/selectors';

export default function Register() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  if (isLoggedIn) {
    toast.success(`Welcome, ${name}`);
    return <Navigate to="/transactions/expenses" />;
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <AdaptDiv>
          <WrapperS>
            <PlugDivs>
              <TableDivs>{!isLoggedIn && <TotalIncome />}</TableDivs>
              <ImgAuth src={homeimg} alt="Main " />
            </PlugDivs>
            <WrapForm>
              <H2>Sign Up</H2>
              <Texts>
                Step into a world of hassle-free expense management! Your
                journey towards financial mastery begins here.
              </Texts>
              <RegisterForm />
            </WrapForm>
          </WrapperS>
        </AdaptDiv>
      </div>
    </HelmetProvider>
  );
}
