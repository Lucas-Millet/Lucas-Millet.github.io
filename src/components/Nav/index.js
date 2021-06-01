// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import Menu from 'src/components/Menu';
import logo from 'src/assets/picture/logo.png';
import './Nav.scss';

// == Composant
const Nav = () => { 
  
  return(
  <div className="nav">
    <div className="nav__logo">
    <NavLink to="/"><img src={logo} alt='Logo' /></NavLink> 
      
    </div>
    <Menu />
</div>

)
};

// == Export
export default Nav;
