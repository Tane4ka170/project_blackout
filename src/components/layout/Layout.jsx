import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';
// import { FramerMotion } from 'helpers/framer-motion';

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};
export default Layout;
