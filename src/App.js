import React,{useContext, useState, useEffect} from 'react'
import classes from './App.module.css';
import {Helmet} from 'react-helmet';
import { AppSettingsContext } from './Context/AppSettingsContext';
import { ErrorTriggerContext, ErrorOccuredContext, EndGameMessageContext, EndGameMessageTriggerContext } from './Context/AppDataContext';
import Navbar from './Components/Navbar/Navbar';
import Board from './Components/Board/Board';
import Keyboard from './Components/Keyboard/Keyboard';
import ErrorMessages from './Components/ErrorMessages/ErrorMessages';
import EndGameMessage from './EndGameModal/EndGameMessage';
import EndGameDetails from './EndGameModal/EndGameDetails';

const App = () => {
  const appSettings = useContext(AppSettingsContext)
  const errorTrigger = useContext(ErrorTriggerContext)
  const trigger = useContext(ErrorOccuredContext)
  const endGame = useContext(EndGameMessageContext)
  const endGameTrigger = useContext(EndGameMessageTriggerContext)

  const [errorActive, toggleErrorActive] = useState(false)
  const [firstUpdate, setFirstUpdate] = useState(true)

  const [endGameActive, toggleEndGameActive] = useState(false)
  const [endGameActiveTrigger, toggleEndGameActiveTrigger] = useState(false)
  const [firstEndUpdate, setFirstEndUpdate] = useState(true)

  useEffect(() => {
    if (firstUpdate !== true){
      toggleErrorActive(true)
      setTimeout(() => {toggleErrorActive(false)}, 1500);
    }
    else {
      setFirstUpdate(false)
    }
  },[errorTrigger, trigger])

  useEffect(() => {
    if (firstEndUpdate !== true) {
      setTimeout(() => {toggleEndGameActiveTrigger(true)}, 1500)  
    }
    else {
      setFirstEndUpdate(false)
    }
  },[endGameTrigger])
  return (
    <div className={classes['page-settings']}>
        <div className={classes.content}>
          <Helmet>
            <style>{`body { background-color: ${appSettings.backgroundColor}; }`}</style>
          </Helmet>
          <Navbar className={classes['navbar-settings']}/>
          <Board className={classes['board-settings']}/>
          <Keyboard  className={classes['keyboard-settings']}/>
          <ErrorMessages visible={errorActive} message={errorTrigger}/>
          <EndGameMessage visible={endGameActiveTrigger} message={endGame} />
          <EndGameDetails visible={endGameActiveTrigger} />
        </div>
        <p className={classes['expand-window']} style={{color: `${appSettings.textColor}`}}>
            Expand your window to use Jordle
        </p>
    </div>
  );
}

export default App;
