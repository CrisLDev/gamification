import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.less';
import App from './router';
import { BrowserRouter } from 'react-router-dom';
import { MeContextProvider } from './context/contextMe';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MeContextProvider>
        <App />
      </MeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
