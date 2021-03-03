// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components
import Home from '../Home/Home';
import About from '../About/About';
import Works from '../Works/Works';
import PortfolioSite from '../Works/PortfolioSite';
import ReactSite from '../Works/ReactSite';
import EcommerceSite from '../Works/EcommerceSite';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
          <Switch>
            <Route path={'/'} exact><Home /></Route>
            <Route path={'/about'}><About /></Route>
            <Route path={'/works'}><Works /></Route>
            <Route path={'/works/portfolio'}><PortfolioSite /></Route>
            <Route path={'/works/react'}><ReactSite /></Route>
            <Route path={'/works/etoile'}><EcommerceSite /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default AppRouter
