import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/auth/selectors.js';
import { TotalIncome } from 'shared/Total';

import {
  AdaptDiv,
  Avatar,
  Content,
  ContentInfo,
  ContentUsers,
  First,
  H1,
  H2,
  H2span,
  H3,
  ImagePack,
  Img,
  PlugDiv,
  Second,
  SignIn,
  SignUp,
  TableDiv,
  Text,
  TextDown,
  Third,
  WrapBtn,
  Wrapper,
} from './Home.styled';

import homeimg from '../../images/home/Rectangle 1x.png';
import first from '../../images/home/first.jpg';
import second from '../../images/home/second.png';
import third from '../../images/home/third.png';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const sessionError = useSelector(selectSessionError);

  // useEffect(() => {
  //   if (isLoggedIn && sessionError) {
  //     toast.error('Session is expired. Please, log in again');
  //   }
  // }, [sessionError, isLoggedIn]);

  if (isLoggedIn) {
    return <Navigate to="/transactions/expenses" />;
  }

  return (
    <AdaptDiv>
      <Wrapper>
        <PlugDiv>
          <TableDiv>{!isLoggedIn && <TotalIncome />}</TableDiv>
          <Img src={homeimg} alt="Main " />
        </PlugDiv>
        <div>
          <Content>
            <H1>Expense log</H1>
            <H2>
              Manage Your{' '}
              <H2span
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Finances
              </H2span>{' '}
              Masterfully!
            </H2>
            <Text>
              ExpenseTracker effortlessly empowers you to take control of your
              finances! With intuitive features, it simplifies the process of
              tracking and managing expenses, allowing for a stress-free mastery
              over your financial world.
            </Text>
            <WrapBtn>
              <SignUp to="/register">Sign Up</SignUp>
              <SignIn to="/login">Sign In</SignIn>
            </WrapBtn>
          </Content>
          <ContentUsers>
            <ImagePack>
              <First>
                <Avatar src={first} width="48px" height="48px" alt="" />
              </First>
              <Second>
                <Avatar src={second} width="48px" height="48px" alt="" />
              </Second>
              <Third>
                <Avatar src={third} width="48px" height="48px" alt="" />
              </Third>
            </ImagePack>
            <ContentInfo>
              <H3>1000 users +</H3>
              <TextDown>
                Trusted by users for reliable expense tracking!
              </TextDown>
            </ContentInfo>
          </ContentUsers>
        </div>
      </Wrapper>
    </AdaptDiv>
  );
};

export default Home;
