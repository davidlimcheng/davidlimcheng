import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/font_awesome/fontawesome-all.min.js';
import './css/style.scss';
import Splash from './components/Splash';
import DemoPage from './components/demo/DemoPage';

const app = (
  <Router>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/textgen" component={DemoPage} />
    </Switch>
  </Router>
);

render (app, document.getElementById('main'));
