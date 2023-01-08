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
    <div className='w-[80%] mx-auto lg:flex flex-column gap-12 mt-[60px]'>
      <section className='basis-full'>
        <Link
          to='/countries/'
          className=' xl:text-[32px] bg-lightest cursor-pointer text-darkest flex items-center gap-2 mb-[40px] p-3 w-[180px] shadow-[2px_2px_5px_rgba(0,0,0,0.3)] rounded-sm hover:bg-slate-200 dark:hover:bg-slate-700 duration-150 transition-bg dark:bg-primaryD dark:text-lightest'
        >
          <AiOutlineArrowLeft className='w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]' />
          Back to home
        </Link>
        <img
          src={country.flags.svg || country[0].flags.svg}
          alt={country.name.common}
          className='shadow-[3px_3px_9px_rgba(0,0,0,0.3)] min-h-[200px] min-w-[260px] object-cover'
        />
      </section>

      <section className='basis-full flex-col gap-10 mt-20'>
        <h1 className='font-semibold text-[32px] dark:text-lightest'>
          {country.name.common}
        </h1>
        <section className='flex lg:flex-row flex-col py-2 gap-8'>
          <div>
            {country.name.nativeName && (
              <p className='paragraph'>
                Native Name:
                <span>
                  {Object.values(country.name.nativeName)[0].official}
                </span>
              </p>
            )}
            <p className='paragraph'>
              Population: <span>{country.population}</span>
            </p>
            <p className='paragraph'>
              Region:
              <span>{country.region}</span>
            </p>
            {country.subregion && (
              <p className='paragraph'>
                Subregion:
                <span> country.subregion</span>
              </p>
            )}
            {country.capital && (
              <p className='paragraph'>
                Capital: <span>{country.capital[0]} </span>
              </p>
            )}
          </div>

          <div className='flex-col'>
            <p className='paragraph'>
              Top Level Domain:{' '}
              <span> {country.tld && country.tld.join(' / ')}</span>
            </p>
            {country.currencies && (
              <p className='paragraph'>
                Currencies:
                <span>{Object.values(country.currencies)[0].name}</span>
              </p>
            )}
            {/* <p>Languages: {country.languages}</p> */}
          </div>
        </section>

        <div className=' flex gap-3 flex-wrap justify-center items-center pt-6 lg:py-3 py-10'>
          <p className='xl:text-[32px] lg:text-[16px] text-[26px] dark:text-lightest'>
            Border Countries:{' '}
          </p>
          {country.borders &&
            country.borders.map((border, index) => {
              return <CTA key={index} code={border} />
            })}
        </div>
      </section>
    </div>
  ) : (
    <svg
      width='400'
      height='400'
      viewBox='0 0 140 140'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]]'
    >
      <g id='loading-frame'>
        <g id='loading'>
          <path
            id='small'
            d='M80 75.5C80 68.5964 74.4036 63 67.5 63M67.5 88C60.5964 88 55 82.4036 55 75.5'
            stroke='green'
            strokeWidth='3'
            className='origin-center animate-spinRight scale-[1.1]'
          />
          <path
            id='medium'
            d='M92 75C92 88.8071 80.8071 100 67 100M42 75C42 61.1929 53.1929 50 67 50'
            stroke='blue'
            strokeWidth='4'
            className='origin-center animate-spinLeft scale-[1.45]'
          />
          <path
            id='large'
            d='M100 75.5C100 57.5507 85.4493 43 67.5 43M67.5 108C49.5507 108 35 93.4493 35 75.5'
            stroke='green'
            strokeWidth='5'
            className='origin-center animate-spinRight scale-[1.70]'
          />
        </g>
      </g>
    </svg>
  )
}

export default Detail
