import React, { useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from './context'

function Detail() {
  const { id } = useParams()

  const { getSingleCountry } = useGlobalContext()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((data) => data.json())
      .then((data) => getSingleCountry(data))
  }, [])

  console.log(CC)

  return (
    <div>
      {CC[0] ? (
        <div>
          <div>
            <Link to='/'> Back to home</Link>
            <img src={CC[0].flag} alt={CC[0].name} />
          </div>

          <div>
            <h1>{CC[0].name}</h1>
            <div>
              <div>
                <p>
                  Native Name:
                  {
                    CC[0].native_name[Object.keys(CC[0].native_name)[0]]
                      .official
                  }
                </p>
                <p>Population: {CC[0].population} </p>
                <p>Region: {CC[0].region}</p>
                <p>Sub Region: {CC[0].sub_region}</p>
                <p>Capital: {CC[0].capital}</p>
              </div>
              <div>
                <p>
                  Top Leve Domein:
                  {CC[0].top_level_domain
                    .map((tld) => {
                      return tld
                    })
                    .join(',')}
                </p>
                <p>
                  Currencies:
                  {CC[0].currencies[Object.keys(CC[0].currencies)[0]].name}
                </p>
                <p>Languages: </p>
              </div>
            </div>

            <div>
              <h1>Border Countries:</h1>
            </div>
          </div>
        </div>
      ) : (
        <h1>No sir no</h1>
      )}
    </div>
  )
}

export default Detail
