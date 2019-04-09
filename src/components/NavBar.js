import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        exact to='/'
        style={linkStyle}
        activeStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.1)'}}
        hoverStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.2)'}}
      >Home</NavLink>
      <NavLink
        exact to='/actors'
        style={linkStyle}
        activeStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.1)'}}
        hoverStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.2)'}}
      >Actors</NavLink>
      <NavLink
        exact to='/directors'
        style={linkStyle}
        activeStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.1)'}}
        hoverStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.2)'}}
      >Directors</NavLink>
      <NavLink
        exact to='/movies'
        style={linkStyle}
        activeStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.1)'}}
        hoverStyle={{textDecoration: 'underline rgba(0, 0, 0, 0.2)'}}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;
