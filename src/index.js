import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppSettingsProvider from './Context/AppSettingsContext'
import AppDataProvider from './Context/AppDataContext'

ReactDOM.render(
  <AppSettingsProvider>
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </AppSettingsProvider>,
  document.getElementById('root')
);

