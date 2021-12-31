import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/global.css'
import './css/index.css'

import {BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);