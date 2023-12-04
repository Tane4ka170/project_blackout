import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom/dist';

import { useAuth } from './hooks';
import { refreshThunk } from '../redux/auth/operations';
import Layout from './layout/Layout';
import Loader from './loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const MainTransactionsPage = lazy(() =>
  import('pages/MainTransactionsPage/MainTransactionsPage')
);
const Expense = lazy(() => import('pages/Expense/Expense'));
const Income = lazy(() => import('pages/Income/Income'));
const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Suspense>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/transactions/:transactionsType"
              element={<MainTransactionsPage />}
            />
            <Route path="/expenses" element={<Expense />} />
            <Route path="/incomes" element={<Income />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
