import React, { useContext, useReducer, useState } from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

let initialValues = {
  text: '',
  sort: 'ByRegion',
  CC: {},
  countries: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const handleSort = (value) => {
    dispatch({ type: 'HANDLE_SORTING', payload: value })
  }

  const getSingleCountry = (data) => {
    dispatch({ type: 'SINGLE_COUNTRY', payload: data })
  }

  useState(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'GET_COUNTRIES', payload: data }))
  }, [])

  return (
    <AppContext.Provider value={{ ...state, handleSort, getSingleCountry }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
