import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/style.scss';
import App from './components/App';

// render(<Root/>, document.querySelector('#main'));

render ((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.querySelector('#main'));
