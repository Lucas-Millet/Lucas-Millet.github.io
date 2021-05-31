// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';

// == Import

import './Menu.scss';
import close from 'src/assets/picture/close.png';

// == Composant
const Menu = () => { 
  const [show, setShow] = useState(false);

  function openMenu(){ 
    setShow(!show);
    let menu = document.querySelector(".menu_block");
    let button_Menu = document.querySelector(".button_Menu");
    let button_Image = document.querySelector(".button_Image");
    if(menu.classList.contains("show"))
    {
      menu.classList.remove("show");
     
    /*  button_Menu.classList.remove("open");
      button_Image.classList.remove("close");
      button_Menu.classList.add("close");
      button_Image.classList.add("open");
    */
    }
    else{
      menu.classList.add("show");
    /*  button_Menu.classList.remove("close");
      button_Image.classList.remove("open");
      button_Menu.classList.add("open");
      button_Image.classList.add("close");
    */
    }
   
  }
  return(
  <div className="menu">
    <nav className="menu__nav">
      <button className="button_Menu" onClick={openMenu}>{show ? <img className="button_Image" src={close} /> : 'Menu'} </button>
    </nav>
    
   
    <div className="menu_block close">
      <ul className="menu__list">
        <li className="menu__listItem">
          Portfolio
        </li>
        <li className="menu__listItem">
          Voir mon CV
        </li>
      </ul>
    </div>
  </div>

)
};

// == Export
export default Menu;
