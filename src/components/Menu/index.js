// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './Menu.scss';
import close from 'src/assets/picture/close.png';

// == Composant
const Menu = () => { 
  const [show, setShow] = useState(false);

  function openMenu(){ 
    setShow(!show);
    let menu = document.querySelector(".menu_block");
   
    if(menu.id === "show")
    {
      menu.id = "";
     
   
    }
    else{
      menu.id = "show";
   
    }
   
  }
  return(
  <div className="menu">
    <nav className="menu__nav">
      <button className="button_Menu" onClick={openMenu}>{show ? <img className="button_Image" src={close} /> : 'Menu'} </button>
    </nav>
    
   
    <div className="menu_block">
      <ul className="menu__list">
        <li className="menu__listItem">
        <NavLink to="/portfolio" onClick={openMenu}>Portfolio</NavLink> 
        </li>
        <li className="menu__listItem">
        <NavLink to="/mon-CV" onClick={openMenu}>Voir mon CV</NavLink> 
        </li>
      </ul>
    </div>
  </div>

)
};

// == Export
export default Menu;
