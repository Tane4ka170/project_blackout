// import Login from "pages/Login/Login";
// import { Link } from "react-router-dom/dist";
// import { Link } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom/dist';




const Home = () => (

  <div >
    <div>
      <h1 >Expense log</h1>
      <h2>Manage Your <span>Finances</span> Masterfully!</h2>
      <p>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>
      <NavLink to="/register">Sign Up</NavLink>
      <br></br>
      <NavLink to="/login">Sign In</NavLink>

    </div>
    <div>
      <h3>1000 users +</h3>
      <p>Trusted by users for reliable expense tracking!</p>
    </div>
  </div>


);

export default Home;
