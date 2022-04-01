import React, {useState} from 'react'

export const AppSettingsContext = React.createContext()
export const ChangeAppSettingsContext = React.createContext()

const AppSettingsProvider = ({children}) => {
    const darkThemeSettings = {
        theme: 'dark',
        backgroundColor: 'rgb(19,19,20)',
        textColor: 'white',
        borderColor: 'rgb(51,51,52)'
    }

    const lightThemeSettings = {
        theme: 'light',
        backgroundColor: 'rgb(255,255,255)',
        textColor: 'black',
        borderColor: 'rgb(109,113,115)'
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