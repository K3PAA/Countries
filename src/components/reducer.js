const reducer = (state, action) => {
  if (action.type === 'GET_COUNTRIES') {
    const values = action.payload.map((country) => {
      return {
        name: country.name.official,
        capital: country.capital ? country.capital[0] : null,
        region: country.region,
        flag: country.flags.svg,
        population: country.population,
        id: country.cca3,
      }
    })

    return { ...state, countries: values }
  }

  if (action.type === 'HANDLE_SORTING') {
    return { ...state, sort: action.payload }
  }

  return state
}

export default reducer
