import React,{useContext} from 'react'
import classes from './EndGameMessage.module.css'
import { AppSettingsContext } from '../Context/AppSettingsContext'

const EndGameMessage = (props) => {
    const appSettings = useContext(AppSettingsContext)

    const styles = {
        backgroundColor: appSettings.errorMessageBackground,
        color: appSettings.errorMessageText,
        display: props.visible  ? 'block': 'none'
    }
    return(
        <p className={`${classes.message}`} style={styles}>{props.message}</p>
    )
}

export default EndGameMessage