import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppSettingsProvider from './Context/AppSettingsContext'

ReactDOM.render(
  <AppSettingsProvider>
    <App />
  </AppSettingsProvider>,
  document.getElementById('root')
);

