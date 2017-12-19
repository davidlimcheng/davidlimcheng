import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import './css/style.css';

render(<App />, document.querySelector('#main'));
