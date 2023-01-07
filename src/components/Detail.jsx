import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import CTA from './CTA'

function Detail() {
  const { id } = useParams()

  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((data) => data.json())
      .then((data) => setCountry(...data))
      .catch((err) => console.log(err))
  }, [])

  return country ? (
    <div>
      {/* Left Side */}
      <section>
        <Link to='/'>Back to home</Link>
        <img src={country.flags.svg} alt={country.name.common} />
      </section>
      {/* End Left Side */}
      {/* Right Side */}
      <section>
        <h1>{country.name.common}</h1>
        <p>Native Name: {Object.values(country.name.nativeName)[0].official}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion}</p>
        {country.capital && <p>Capital: {country.capital[0]} </p>}
        <p>Top Level Domain: {country.tld.join(' / ')}</p>
        <p>Currencies: {Object.values(country.currencies)[0].name}</p>
        {/* <p>Languages: {country.languages}</p> */}

        {country.borders &&
          country.borders.map((border, index) => {
            return <CTA key={index} code={border} />
          })}
      </section>
      {/* End Right Side */}
    </div>
  ) : (
    <h1>Loading ...</h1>
  )
}

export default Detail
