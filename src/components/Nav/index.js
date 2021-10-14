// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { VscFolderOpened } from 'react-icons/vsc';
import { GoMail } from 'react-icons/go';

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
    <NavLink to="/portfolio" className="nav__link"><VscFolderOpened className="icon" />
      Mes projets</NavLink> 
    <NavLink to="/qui-suis-je" className="nav__link"><FiUser className="icon" />
      Qui-suis-je</NavLink> 
     <NavLink to="/contact" className="nav__link"><GoMail className="icon" />
       Contact</NavLink> 
    </div>
</div>

)
};

// == Export
export default Nav;
