import React,{useContext} from 'react'
import classes from './App.module.css';
import {Helmet} from 'react-helmet';
import { AppSettingsContext } from './Context/AppSettingsContext';
import Navbar from './Components/Navbar/Navbar';
import Board from './Components/Board/Board';
import Keyboard from './Components/Keyboard/Keyboard';

const App = () => {
  const appSettings = useContext(AppSettingsContext)

  
  return (
    <div className={classes['page-settings']}>
        <div className={classes.content}>
          <Helmet>
            <style>{`body { background-color: ${appSettings.backgroundColor}; }`}</style>
          </Helmet>
          <Navbar />
          <Board />
          <Keyboard />
        </div>

        <p className={classes['expand-window']} style={{color: `${appSettings.textColor}`}}>
            Expand your window to use Jordle
        </p>
    </div>
  );
}

export default App;
