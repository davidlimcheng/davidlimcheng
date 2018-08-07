import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './css/font_awesome/fontawesome-all.min.js';
import './css/style.scss';
// import Dog from './components/Dog';
import Splash from './components/Splash';
import Projects from './components/Projects';
// import Text from './components/Text';

const app = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/dog" component={Splash} />
        <Route path="/textgen" component={Splash} />
      </Switch>
    </div>
  </Router>
);

render (app, document.getElementById('main'));
