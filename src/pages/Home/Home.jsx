// import Login from "pages/Login/Login";
// import { Link } from "react-router-dom/dist";
// import { Link } from 'react-router-dom';

import { Avatar, Content, ContentInfo, ContentUsers, First, H1, H2, H2span, H3, ImagePack, Links, Second, SignUp, Text, TextDown, Third, WrapBtn, Wrapper } from './Home.styled';
import homeimg from '../../images/home/Rectangle 1.png'
import first from '../../images/home/first.jpg'
import second from '../../images/home/second.png'
import third from '../../images/home/third.png'



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
        <ImagePack>
          <First><Avatar src={first} width="48px" height="48px" alt="" /></First>
          <Second><Avatar src={second} width="48px" height="48px" alt="" /></Second>
          <Third><Avatar src={third} width="48px" height="48px" alt="" /></Third>
        </ImagePack>
        <ContentInfo>
          <H3>1000 users +</H3>
          <TextDown>Trusted by users for reliable expense tracking!</TextDown>
        </ContentInfo>
      </ContentUsers>
    </div>
  </Wrapper>


);

export default Home;
