import { useDispatch } from 'react-redux';
// import { Categories } from './categories/Categories';
import { useAuth } from './hooks';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom/dist';

import { refreshThunk } from 'redux/auth/operations';

// import { Navigate, Route, Routes, Link } from 'react-router-dom';
import Layout from './layout/Layout';
import Loader from './loader/Loader';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import { Categories } from './categories/Categories';
import NotFound from 'pages/NotFoundPage/NotFound';
import { Expense } from 'pages/Expense/Expense';
import { Income } from 'pages/Income/Income';

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register/Register'));
// const LoginPage = lazy(() => import('../pages/Login/Login'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? ( // if isRefreshing is true, then render Loader, else render Container
    <Loader /> // Loader - spinner
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/incomes" element={<Income />} />
          <Route
            path="register"
            element={
              <Register />
              // <PrivateRoute
              //   redirectTo="/register"
              //   component={<Register />}
              // />
            }
          />
          <Route
            path="login"
            element={
              <Login />
              // <PrivateRoute
              //   redirectTo="/contacts"
              //   component={<Login />}
              // />
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} />{' '} */}
          {/* redirect to home page */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Categories />
    </div>
  );
}

export default App;
