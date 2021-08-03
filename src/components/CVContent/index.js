// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './CVContent.scss';
import photo from 'src/assets/picture/photoCV.png';
import CV from 'src/assets/CV/CV_Lucas.png';


// == Composant
const CVContent  = () => { 
  return(
    <div className="cvContent">
   <h1 className="cvContent__H1">Qui-suis-je</h1>
   <div className="cvContent__Block">
     <h2>A propos de moi</h2>
     <p>
    Hello ! Je m'appelle Lucas Millet, j'ai 26 ans et je viens de finir mon cursus de <span className="bold">développeur front-end chez O'clock</span>. Je me suis spécialisé dans le <span className="bold">Javascript</span> et <span className="bold">React</span> plus précisement. Je suis une personne curieuse et j'aime comprendre le monde qui m'entoure.
    Ce qui me motive dans la vie c'est de produire des outils au service de l'<span className="bold">Humain</span>.
    </p>
   </div>
   <div className="cvContent__Block">
     <h2>Mon parcours</h2>
     <p>Mon parcours c'est un comme un Yo-Yo. J'ai commencé le code dès la sortie du bac avec un <span className="bold">BTS SIO</span>. J'ai poussé jusqu'en <span className="bold">master 1 à l'ESGI</span> mais cela ne me plaisait plus. Je me suis réorienté dans l'<span className="bold">UX Design</span> afin de garder ce "package" web. J'ai même validé un master 2 ! Mais voilà au final ce qui me plaît vraiment c'est le développement. Et vu que je n'avais pas codé depuis un moment, il me fallait une structure avec du challenge afin de me dépasser et reprendre du niveau. Je me suis inscrit chez <span className="bold">O'clock</span> avec cette logique et je n'ai pas été déçu.
     </p>
     
   </div>
   <div className="cvContent__Block">
     <h2>Mon expérience professionnelle</h2>
     <p>J'ai toujours aimé et fait de <span className="bold">l'alternance</span>. Ce mode de vie alliant cours et entreprise me réussit plutôt bien c'est pourquoi j'ai fait ma licence pro ainsi que mes deux masters en suivant cette voie.
      J'ai d'abord commencé chez Linedata Services en tant qu'<span className="bold">intégrateur junior</span> / <span className="bold">UX designer</span> pendant 1 an et demi puis j'ai pu refaire un peu d'intégration et de marketing en tant que <span className="bold">traffic manager</span> chez ADUX (pour une durée d'1 an et demi également).
     </p>
     
   </div>
   <div className="cvContent__Block">
     <h2>Envie d'en savoir plus ?</h2>
    <p>Vous pouvez découvrir mes projets en <a href="/portfolio">cliquant ici </a></p>
    <p>En cas d'interrogation sur mon profil, n'hésitez pas à <a href="/contact"> m'envoyer un mail</a>. Je ne mords pas, promis !</p>
   </div>

   <a href={CV} id="DlCV" download>Télécharger mon CV</a>
  
    </div>
 
  )
};

// == Export
export default CVContent ;
