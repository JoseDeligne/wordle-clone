import React,{useContext} from 'react'
import classes from './EndGameDetails.module.css'
import { AppSettingsContext } from '../Context/AppSettingsContext'
import { AppDataContext } from '../Context/AppDataContext'

const EndGameDetails = (props) => {
    const appSettings = useContext(AppSettingsContext)
    const appData = useContext(AppDataContext)

    const styles = {
        backgroundColor: appSettings.backgroundColor,
        color: appSettings.textColor,
    }

    const btnStyles = {
        backgroundColor: appSettings.btnBackgroundColor,
        color: appSettings.textColor,
        padding: '0.3cm 0.5cm',
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    return(
        <div style={{display: props.visible  ? 'block': 'none'}}>
            <div className={classes.backdrop} />
            <div className={classes.content} style={styles}>
                <p className={`${classes.message}`} style={styles}>{appData.answer}</p>
                <button className={classes.btn} style={btnStyles}>Next Word</button>
            </div>
        </div>
    )
}

export default EndGameDetails