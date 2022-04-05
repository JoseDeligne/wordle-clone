import React,{useContext} from 'react'
import classes from './Key.module.css'
import { AppSettingsContext } from '../../Context/AppSettingsContext'
import { AppDataContext, ModifyAppDataContext, EndGameMessageTriggerContext } from '../../Context/AppDataContext'

const Key = (props) => {
    const appSettings = useContext(AppSettingsContext)
    const appData = useContext(AppDataContext)
    const modifyAppData = useContext(ModifyAppDataContext)
    const endGame = useContext(EndGameMessageTriggerContext)

    let paddingClass = undefined
    if (props.value === 'ENTER' || props.value === 'DELETE') {
        paddingClass = classes['special-key']
    }
    else {
        paddingClass = classes['normal-key']
    }

    const addLetterHandler = () => {
        modifyAppData('WORD', props.value)
    }

    return(
        <div 
         className={`${props.className} ${classes.key} ${paddingClass}`} 
         style={{backgroundColor: appSettings.keyNotSelectedColor}}
         onClick={() => {
             if (!endGame) {
                addLetterHandler()
             }
            }}
         >
            <p 
             style={{color: appSettings.textColor}}
             >
                 {props.value}
            </p>
        </div>
    )
}

export default Key