import React, {useState, useContext, useEffect} from 'react'
import classes from './Board.module.css'
import BoardCell from './BoardCell'
import {AppDataContext, TriggerContext} from '../../Context/AppDataContext'
import { CurrentRowContext } from '../../Context/AppDataContext'

const Board = (props) => {
    const AppData = useContext(AppDataContext)
    const currentRow= useContext(CurrentRowContext)
    const triggerActive = useContext(TriggerContext)
    const boardState = AppData.board

    const [firstUpdate, setFirstUpdate] = useState(true)
    const [flipRow, setFlipRow] = useState(null)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        setTrigger(!trigger)
    },[triggerActive])

    useEffect(() => {
        if (firstUpdate) {
            setFirstUpdate(false)
        } else {
            setFlipRow(currentRow-1)
        }
    }, [currentRow])

    return(
        <div className={`${props.className}`}>
            <div className={classes.board}>
                {boardState.map((row, index) => {
                    return(
                        row.map((cellValue, rowIndex) => {
                            let marginRight = true
                            if (rowIndex === row.length-1) {
                                marginRight = false
                            }
                            return(
                                <BoardCell 
                                 key={`${index}+${rowIndex}`} 
                                 value={cellValue} 
                                 columnIndex={rowIndex} 
                                 flip={index === flipRow ? true : false} 
                                 marginRight={marginRight}/>
                            )
                        })
                    )
                })}
            </div>
        </div>
    )
}

export default Board;