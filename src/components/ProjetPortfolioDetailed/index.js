// == Import npm
import React from 'react';



// == Import

import './ProjetPortfolioDetailed.scss';
import wireframes from 'src/assets/picture/wireframes_portfolio.png';
import inspiration from 'src/assets/picture/choosit.svg';
import NextProjectButton from 'src/components/NextProjectButton';



// == Composant
const ProjetPortfolioDetailed  = () => { 
  return(
    <div className="ProjetPortfolioDetailed">

      <hr></hr>
      
      <img src={wireframes} alt="Wireframes" className="ProjetPortfolioDetailed__img"/>
      <figcaption>Wireframes</figcaption>
      <img src={inspiration} alt="inspiration" className="ProjetPortfolioDetailed__img" id="smaller"/>
      <figcaption>inspiration</figcaption>
      <p className="ProjetPortfolioDetailed__p" >Sources :  <span className="ProjetPortfolioDetailed__span">https://www.julienvanroy.fr/</span>
      <span className="ProjetPortfolioDetailed__span">https://www.olivier-guilleux.com/</span>
      <span className="ProjetPortfolioDetailed__span">https://www.guillaumelebelt.fr/</span>
      </p>
      <NextProjectButton  value="lab"/>
    </div>
      
  )
};

// == Export
export default ProjetPortfolioDetailed ;
