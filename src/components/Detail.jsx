import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams()

  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((data) => data.json())
      .then((data) => setCountry(...data))
      .catch((err) => console.log(err))
  }, [])

  console.log(country && country.currencies)

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
        <p>Native Name: {country.nativeName}</p>
      </section>
      {/* End Right Side */}
    </div>
  ) : (
    <h1>Loading ...</h1>
  )
}

export default Detail
