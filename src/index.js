import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/font_awesome/fontawesome-all.min.js';
import './css/style.scss';
import App from './components/App';
import Projects from './components/Projects';

render ((
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  </BrowserRouter>
), document.querySelector('#main'));
