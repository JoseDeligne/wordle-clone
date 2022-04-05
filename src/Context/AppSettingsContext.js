import React, {useState} from 'react'

export const AppSettingsContext = React.createContext()
export const ChangeAppSettingsContext = React.createContext()

const AppSettingsProvider = ({children}) => {
    const darkThemeSettings = {
        theme: 'dark',
        backgroundColor: 'rgb(19,19,20)',
        textColor: 'white',
        borderColor: 'rgb(51,51,52)',
        correctPlaceColor: 'rgb(74,129,73)',
        incorrectPlaceColor: 'rgb(172,149,62)',
        wrongLetterColor: 'rgb(51,51,52)',
        keyNotSelectedColor: 'rgb(118, 120, 121)',
        errorMessageBackground: 'white',
        errorMessageText: 'black',
        btnBackgroundColor: 'rgb(68, 116, 67)'
    }

    const lightThemeSettings = {
        theme: 'light',
        backgroundColor: 'rgb(255,255,255)',
        textColor: 'black',
        borderColor: 'rgb(109,113,115)',
        correctPlaceColor: 'rgb(96,160,94)',
        incorrectPlaceColor: 'rgb(194,171,86)',
        wrongLetterColor: 'rgb(109,113,115)',
        keyNotSelectedColor: 'rgb(205, 208, 213)',
        errorMessageBackground: 'black',
        errorMessageText: 'white',
        btnBackgroundColor: 'rgb(111, 170, 109)'
    }

    const [appSettings, changeAppSettings] = useState(darkThemeSettings)

    const changeAppSettingsHandler = () => {
        return
    }

    return(
        <AppSettingsContext.Provider value={appSettings}>
            <ChangeAppSettingsContext.Provider value={appSettings}>
                {children}
            </ChangeAppSettingsContext.Provider>
        </AppSettingsContext.Provider>
    )
}

export default AppSettingsProvider