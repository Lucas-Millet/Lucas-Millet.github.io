// == Import npm
import React from 'react';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
// == Import
import './styles.scss';

// == Import Component
import Nav from 'src/components/Nav';
import Menu from 'src/components/Menu';
import HomePageContent from 'src/components/HomePageContent';
import PortfolioContent from 'src/components/PortfolioContent';
import CVContent from 'src/components/CVContent';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route path="/" exact>
        <HomePageContent />
        
      </Route>
      <Route path="/mon-CV" exact>
        <CVContent />
      </Route>
      <Route path="/portfolio" exact>
        <PortfolioContent />
      </Route>
      <Route path="/portfolio/:name">
        <h1>Un projet</h1>
      </Route>
    </Switch>

   
  </div>
);

// == Export
export default App;
