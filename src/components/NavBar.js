import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const style = {color: 'white', background: "blue" }
  return (
    <div className ='navbar'>
      <NavLink
        to='/'
        exact
        activeStyle={style}
        >Home
      </NavLink>
      <NavLink
        to='/movies'
        exact
        activeStyle={style}
        >Movies
      </NavLink>
      <NavLink
        to='/directors'
        exact
        activeStyle={style}
        >Directors
      </NavLink>
      <NavLink
        to='/actors'
        exact
        activeStyle={style}
        >Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
