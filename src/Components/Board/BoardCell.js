import React,{useContext} from 'react'
import classes from './BoardCell.module.css'
import { AppSettingsContext } from '../../Context/AppSettingsContext'

const BoardCell = (props) => {
    const appSettings = useContext(AppSettingsContext)
    let cellStyles = {
        color: appSettings.textColor,
        border: `3px solid ${appSettings.borderColor}`,
        marginRight: props.marginRight ? '1cm' : '0'
    }

    return(
        <div className={classes.cell} style={cellStyles}>
            {props.value === null ? '' : props.value}
        </div>
    )
}

export default BoardCell