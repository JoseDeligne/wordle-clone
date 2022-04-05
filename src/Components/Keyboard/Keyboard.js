import React from 'react'
import classes from './Keyboard.module.css'
import Key from './Key'

const Keyboard = (props) => {
    const keyboardButtons = 
    [
        ['Q', 'W', 'E', 'R', 'T', 'Y' , 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X','C','V','B','N','M','DELETE']
    ]

    return(
        <div className={`${props.className} ${classes.keyboard}`}>
            {keyboardButtons.map((row, index) => {
                return(
                    <div className={classes.row}>
                        {row.map((key, rowIndex) => {
                            return(
                                <Key className={classes['key-settings']} key={`${index}+${rowIndex}`} value={key} />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Keyboard