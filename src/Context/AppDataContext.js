import React,{useState} from 'react'
import { getWord, searchForWord } from '../Components/Utility/WordSearch'

export const AppDataContext = React.createContext()
export const ModifyAppDataContext = React.createContext()
export const TriggerContext = React.createContext()
export const ErrorTriggerContext = React.createContext()
export const ErrorOccuredContext = React.createContext()
export const CurrentRowContext = React.createContext()
export const EndGameMessageContext = React.createContext()
export const EndGameMessageTriggerContext = React.createContext()

const insertLetterInArray = (array, letter) => {
    if (array.indexOf(null) !== -1) {
        array[array.indexOf(null)] = letter
    }
    return array    
}

const AppDataProvider = ({children}) => {
    const intialEmptyBoard = 
        [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ]


    const [currentRow, changeCurrentRow] = useState(0)
    const [currentWord, changeCurrentWord] = useState('')
    const [appData, changeAppData] = useState({board: intialEmptyBoard, answer: getWord(), currentRow: currentRow, currentWord: currentWord, rowList: ['','','','','','']})
    const [trigger, toggleTrigger] = useState(false)
    const [errorTrigger, toggleErrorTrigger] = useState('')
    const [errorOccured, toggleErrorOccured] = useState(false)
    const [endGame, toggleEndGame] = useState('')
    const [endGameTrigger, toggleEndGameTrigger] = useState('')

    const winMessages = ['Genius!', 'Wow!', 'Nice!', 'Got it!', 'Did it!', 'Phew!']


    const changeAppDataHandler = (target, value) => {
        if (target === 'WORD') {
            if (value === 'ENTER') {
                if (appData.board[currentRow].indexOf(null) !== -1) {
                    toggleErrorTrigger('Not Enough Letters')
                    toggleErrorOccured(!errorOccured)
                    return
                } 
                else {
                    let word = ''
                    appData.board[currentRow].forEach((char) => word += char)
                    console.log(word)
                    if (word.toLowerCase() === appData.answer) {
                        toggleEndGame(winMessages[appData.currentRow])
                        toggleEndGameTrigger(true)
                    }
                    if (searchForWord(word)) {
                        if (currentRow < 5) {
                            changeCurrentRow(currentRow+1)
                        } else {
                            toggleEndGame(appData.answer)
                            toggleEndGameTrigger(true)
                        }
                        toggleTrigger(!trigger)
                    }
                    else {
                        toggleErrorTrigger('Not In Word Bank')
                        toggleErrorOccured(!errorOccured)
                        return
                    }
                }
            }
            if (value === 'DELETE') {
                let updatedData = appData
                const nextEmptySpot = appData.board[currentRow].indexOf(null)
                if (nextEmptySpot === 0) {
                    return
                }
                if (nextEmptySpot === -1) {
                    updatedData.board[currentRow][4] = null
                } 
                else {
                    updatedData.board[currentRow][nextEmptySpot-1] = null
                }
                changeAppData(updatedData)
                toggleTrigger(!trigger)
            }
            else {
                let updatedWordArray = insertLetterInArray(appData.board[currentRow], value)
                let updatedData = appData
                updatedData.board[currentRow] = updatedWordArray
                changeAppData(updatedData)
                toggleTrigger(!trigger)
            }
        }
    }

    return(
        <AppDataContext.Provider value={appData}>
            <ModifyAppDataContext.Provider value={changeAppDataHandler}>
                <TriggerContext.Provider value={trigger}>
                    <ErrorTriggerContext.Provider value={errorTrigger}>
                        <ErrorOccuredContext.Provider value={errorOccured}>
                            <CurrentRowContext.Provider value={currentRow}>
                                <EndGameMessageContext.Provider value={endGame}>
                                    <EndGameMessageTriggerContext.Provider value={endGameTrigger}>
                                        {children}
                                    </EndGameMessageTriggerContext.Provider>
                                </EndGameMessageContext.Provider>
                            </CurrentRowContext.Provider>
                        </ErrorOccuredContext.Provider>
                    </ErrorTriggerContext.Provider>
                </TriggerContext.Provider>
            </ModifyAppDataContext.Provider>
        </AppDataContext.Provider>
    )
}

export default AppDataProvider