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

export default ThemeContext