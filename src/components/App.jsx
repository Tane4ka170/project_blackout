import { Categories } from './categories/Categories';

import Home from '../pages/Home/Home'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Home/>
      <Categories />
      React homework template
    </div>
  );
};
