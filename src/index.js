import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './css/font_awesome/fontawesome-all.min.js';
import './css/style.scss';
import Splash from './components/Splash';
import Projects from './components/Projects';

const app = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  </Router>
);

render (app, document.getElementById('main'));
