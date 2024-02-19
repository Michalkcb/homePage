import React, {useState, useEffect, createContext} from 'react'

const getInitialTheme = () => {
    if (typeof window != 'undefined' && window.localStorage){
        const storedPrefs  =window.localStorage.getItem('lolor-theme')
        if (typeof storedPrefs === 'string'){
            return storedPrefs
        }
        const userMedia  =window.matchMedia('prefers-sheme: dark')
        if (userMedia.matches){
            return 'dark'
        }
    }
  return 'light'
}

export const ThemeContext = createContext();

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }
    if (initialTheme){
        rawSetTheme(initialTheme)
    }

    useEffect(()=>{
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}