import React,{useContext} from 'react'
import classes from './ErrorMessages.module.css'
import { AppSettingsContext } from '../../Context/AppSettingsContext'

const ErrorMessages = (props) => {
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

export default ErrorMessages