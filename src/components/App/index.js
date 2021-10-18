// == Import npm
import React, { useEffect, useState } from 'react';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
// == Import
import './styles.scss';

// == Import Component
import Nav from 'src/components/Nav';
import HomePageContent from 'src/components/HomePageContent';
import PortfolioContent from 'src/components/PortfolioContent';
import CVContent from 'src/components/CVContent';
import FrenchConnexionContent from 'src/components/FrenchConnexionContent';
import ProjetPortfolioContent from 'src/components/ProjetPortfolioContent';
import ProjetLabContent from 'src/components/ProjetLabContent';
import ContactPage from 'src/components/ContactPage';





// == Composant
const App = () => {
  // on utilise le hook useLocation fourni par react-router-dom
  // pour récupérer les information concernant la location (l'url) courante
  const location = useLocation();
  const [loading,setLoading] = useState(true);

  // on applique un effet de scroll de la fenêtre du navigateur vers les coordonnées (0,0)
  // au montage du composant App et quand location change
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );



  return (
  <div className="app">
    <Nav />
    <Switch>
      <Route path="/" exact>
        <HomePageContent />
        
      </Route>
      <Route path="/qui-suis-je" exact>
        <CVContent />
      </Route>
      <Route path="/portfolio" exact>
        <PortfolioContent />
      </Route>
      <Route path="/portfolio/french_connexion" exact>
        <FrenchConnexionContent />
      </Route>
      <Route path="/portfolio/portfolio" exact>
        <ProjetPortfolioContent />
      </Route>
      <Route path="/portfolio/lab" exact>
        <ProjetLabContent />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
    </Switch>

   
  </div>
);
  }
// == Export
export default App;
