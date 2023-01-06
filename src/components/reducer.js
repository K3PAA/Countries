const reducer = (state, action) => {
  if (action.type === 'GET_COUNTRIES') {
    const values = action.payload.map((country) => {
      // capital[0] - stolica region - kontynent flags.svg - flaga population - populacja name.official - nazwa
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

  if (action.type === 'SINGLE_COUNTRY') {
    const values = action.payload.map((country) => {
      return {
        capital: country.capital ? country.capital[0] : null,
        native_name: country.name.nativeName,
        borders: country.borders ? country.borders : null,
        population: country.population,
        region: country.region,
        sub_region: country.subregion,
        name: country.name.common,
        currencies: country.currencies,
        top_level_domain: country.tld,
        flag: country.flags.svg,
        languages: country.languages,
      }
    })

    return { ...state, CC: values }
  }
  if (action.type === 'HANDLE_SORTING') {
    return { ...state, sort: action.payload }
  }

  return state
}

export default reducer
