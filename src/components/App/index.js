// == Import npm
import React from 'react';
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

// == Composant
const App = () => (
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
    </Switch>

   
  </div>
);

// == Export
export default App;
