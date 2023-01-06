import React, { useContext, useReducer, useState } from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

let initialValues = {
  text: '',
  sort: 'ByRegion',
  countries: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const handleSort = (value) => {
    dispatch({ type: 'HANDLE_SORTING', payload: value })
  }

  useState(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'GET_COUNTRIES', payload: data }))
  }, [])

  return (
    <AppContext.Provider value={{ ...state, handleSort }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
