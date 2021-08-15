import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.less';
import { Home } from './view/home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
