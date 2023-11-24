// import Login from "pages/Login/Login";
// import { Link } from "react-router-dom/dist";
// import { Link } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom/dist';
import { Content, ContentUsers, H1, H2, H2span, H3, Links, SignUp, Text, WrapBtn, Wrapper } from './Home.styled';
import homeimg from '../../images/home/Rectangle 1.png'



const Home = () => (

  <Wrapper >
    <img src={homeimg} alt="Main " />
    <div>
      <Content>
        <H1 >Expense log</H1>
        <H2>Manage Your <H2span>Finances</H2span> Masterfully!</H2>
        <Text>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</Text>
        <WrapBtn>
          <SignUp to="/register">Sign Up</SignUp>

          <Links to="/login">Sign In</Links>
        </WrapBtn>
      </Content>
      <ContentUsers>
        <H3>1000 users +</H3>
        <Text>Trusted by users for reliable expense tracking!</Text>
      </ContentUsers>
    </div>
  </Wrapper>


);

export default Home;
