import React, {useState} from 'react'
import classes from './Board.module.css'
import BoardCell from './BoardCell'

const Board = () => {
    const intialEmptyBoard = 
        [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ]

    const [boardState, changeBoardState] = useState(intialEmptyBoard)

    return(
        <div className={classes.board}>
            {boardState.map((row, index) => {
                return(
                    row.map((cellValue, rowIndex) => {
                        let marginRight = true
                        if (rowIndex === row.length-1) {
                            marginRight = false
                        }
                        return(
                            <BoardCell key={`${index}+${rowIndex}`} value={cellValue} marginRight={marginRight}/>
                        )
                    })
                )
            })}
        </div>
    )
}

export default Board;