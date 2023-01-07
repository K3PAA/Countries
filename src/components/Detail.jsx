import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CTA from './CTA'

function Detail() {
  const { id } = useParams()

  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((data) => data.json())
      .then((data) => setCountry(...data))
      .catch((err) => console.log(err))
  }, [id])

  return country ? (
    <div className='lg:w-[1080px] w-[80%] mx-auto flex gap-12 mt-[60px]'>
      <section className='basis-full'>
        <Link
          to='/'
          className=' bg-lightest cursor-pointer text-darkest flex gap-2 mb-[40px] p-3 w-[160px] shadow-[2px_2px_5px_rgba(0,0,0,0.3)] rounded-sm'
        >
          <AiOutlineArrowLeft className='w-[24px] h-[24px]' />
          Back to home
        </Link>
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className='shadow-[3px_3px_9px_rgba(0,0,0,0.3)] min-h-[300px] max-w-[450px] object-cover'
        />
      </section>

      <section className='basis-full flex-col gap-10 mt-20'>
        <h1 className='font-semibold text-[32px] '>{country.name.common}</h1>
        <section className='flex py-2 gap-8'>
          <div>
            <p className='paragraph'>
              Native Name:
              <span>{Object.values(country.name.nativeName)[0].official}</span>
            </p>
            <p className='paragraph'>
              Population: <span>{country.population}</span>
            </p>
            <p className='paragraph'>
              Region:
              <span>{country.region}</span>
            </p>
            <p className='paragraph'>
              Subregion:
              <span>{country.subregion}</span>
            </p>
            {country.capital && (
              <p className='paragraph'>
                Capital: <span>{country.capital[0]} </span>
              </p>
            )}
          </div>

          <div className='flex-col'>
            <p className='paragraph'>
              Top Level Domain: <span> {country.tld.join(' / ')}</span>
            </p>
            <p className='paragraph'>
              Currencies:{' '}
              <span>{Object.values(country.currencies)[0].name}</span>
            </p>
            {/* <p>Languages: {country.languages}</p> */}
          </div>
        </section>

        <div className=' flex gap-3 flex-wrap justify-center items-center pt-6'>
          <p>Border Countries: </p>
          {country.borders &&
            country.borders.map((border, index) => {
              return <CTA key={index} code={border} />
            })}
        </div>
      </section>
    </div>
  ) : (
    <h1>Loading ...</h1>
  )
}

export default Detail
