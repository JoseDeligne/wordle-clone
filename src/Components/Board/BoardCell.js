import React,{useContext, useState ,useEffect} from 'react'
import classes from './BoardCell.module.css'
import { AppSettingsContext } from '../../Context/AppSettingsContext'
import { AppDataContext } from '../../Context/AppDataContext'

const BoardCell = (props) => {
    const appSettings = useContext(AppSettingsContext)
    const AppData = useContext(AppDataContext)

    const [flipDone, setFlip] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('transparent')
/*
    console.log(props.columnIndex)
    console.log(props.value)
    console.log(AppData.answer)
    console.log(AppData.answer[props.columnIndex])
    console.log(AppData.currentRow)
*/
console.log(AppData.answer)

    if (props.flip && !flipDone) {
        setFlip(true)
        console.log('hitting flip')
        console.log(AppData.answer[props.columnIndex])
        console.log(props.value)
        let ansSplit = AppData.answer.split('')
        if (AppData.answer[props.columnIndex].toLowerCase() === props.value.toLowerCase()) {
            console.log('hitting match')
            setBackgroundColor('green')
        }
        else if (ansSplit.includes(props.value.toLowerCase())) {
            setBackgroundColor('rgb(0, 152, 212)')
        }
        
    }

    let cellStyles = {
        color: appSettings.textColor,
        border: `3px solid ${appSettings.borderColor}`,
        marginRight: props.marginRight ? '1cm' : '0',
    }

    const standardDelay = 200
    const transitionDelayTime = standardDelay * props.columnIndex

    

    const flipStyle = {
        transform:  'rotateY(180deg)' ,
        transitionDelay:  `${transitionDelayTime}ms`
    }

    const doNothing = {

    }
    let mainStyle = {}
    if (props.flip || flipDone) {
        mainStyle = flipStyle
    }


    return(
        <div className={`${classes['flip-card']} ${classes.cell}`} style={cellStyles}>
            <div className={classes["flip-card-inner"]} style={mainStyle}>
                <div className={classes["flip-card-front"]}>
                    <p className={classes.value}>{props.value === null ? '' : props.value}</p>
                </div>
                <div className={classes["flip-card-back"]} style={{backgroundColor: backgroundColor}}>
                    <p className={classes.value}>{props.value === null ? '' : props.value}</p>
                </div>
            </div>
        </div>
    )
}

export default BoardCell