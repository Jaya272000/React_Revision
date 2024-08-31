import React from 'react';
import { NavLink } from 'react-router-dom';

export const Routing = () => {
  return (
    <nav>
      <ul>
        <NavLink className={(e)=>{return e.isActive?"red":""}}to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}}to='/about'>
          <li>About</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/Login'>
          <li>Login</li>
        </NavLink>
      </ul>
    </nav>
  );
};
