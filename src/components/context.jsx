import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

let initialValues = {
  text: '',
  theme: 'light',
  sort: 'ByRegion',
  countries: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const handleSort = (value) => {
    dispatch({ type: 'HANDLE_SORTING', payload: value })
  }

  const handleText = (value) => {
    dispatch({ type: 'HANDLE_TEXT', payload: value })
  }

  const changeTheme = () => {
    let x = state.theme === 'light' ? 'dark' : 'light'
    dispatch({ type: 'CHANGE', payload: x })
    window.localStorage.setItem('theme', JSON.stringify(x))
  }

  useEffect(() => {
    // state.theme === 'light'
    //   ? document.documentElement.classList.remove('dark')
    //   : document.documentElement.classList.add('dark')
    state.theme === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark')
  }, [state.theme])

  useEffect(() => {
    const x = JSON.parse(window.localStorage.getItem('theme'))

    if (x !== null) {
      dispatch({ type: 'GET_THEME', payload: x })
    }
  }, [])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'GET_COUNTRIES', payload: data }))
  }, [])

  return (
    <AppContext.Provider
      value={{ ...state, handleSort, handleText, changeTheme }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
