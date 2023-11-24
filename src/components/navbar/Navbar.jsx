import React from 'react';
import { NavLink } from 'react-router-dom/dist';

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        ExpenseTracker
      </NavLink>
    </nav>
  );
};
