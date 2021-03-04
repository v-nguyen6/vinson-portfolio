// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components
import Home from '../Home/Home';
import About from '../About/About';
import Works from '../Works/Works';
import PortfolioSite from '../PortfolioSite/PortfolioSite';
import ReactSite from '../ReactSite/ReactSite';
import EcommerceSite from '../EcommerceSite/EcommerceSite';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
          <Switch>
            <Route path={'/'} exact><Home /></Route>
            <Route path={'/about'}><About /></Route>
            <Route path={'/works'}><Works /></Route>
            <Route path={'/portfolio'}><PortfolioSite /></Route>
            <Route path={'/react'}><ReactSite /></Route>
            <Route path={'/etoile'}><EcommerceSite /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default AppRouter
