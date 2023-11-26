import { Categories } from './categories/Categories';

import Home from 'pages/Home/StyledHome';

import { Route, Routes } from 'react-router';

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/transactions/:transactionsType" element={<Home/>}/>
        {/* <Categories /> */}
      </Routes>
    </div>
  );
};
