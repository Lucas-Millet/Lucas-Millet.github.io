// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import logo from 'src/assets/picture/logosite.svg';
import './Nav.scss';

// == Composant
const Nav = () => { 
  
  return(
  <div className="nav">
    <div className="nav__logo">
    <NavLink to="/"><img src={logo} alt='Logo' /></NavLink> 
    </div>
    <div className="nav__listLink">
    <NavLink to="/portfolio" className="nav__link">Mes projets</NavLink> 
    <NavLink to="/qui-suis-je" className="nav__link">Qui-suis-je</NavLink> 
     <NavLink to="/contact" className="nav__link">Contact</NavLink> 
    </div>
</div>

)
};

// == Export
export default Nav;
