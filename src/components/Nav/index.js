// == Import npm
import React from 'react';

// == Import
import Menu from 'src/components/Menu';
import logo from 'src/assets/picture/logo.png';
import './Nav.scss';

// == Composant
const Nav = () => { 
  
  return(
  <div className="nav">
    <div className="nav__logo">
      <img src={logo} alt='Logo' />
    </div>
    <Menu />
</div>

)
};

// == Export
export default Nav;
