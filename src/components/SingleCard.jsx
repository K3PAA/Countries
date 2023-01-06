import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../style'

function SingleCard({ name, capital, region, flag, population, id }) {
  return (
    <div className='w-[320px] flex-col bg-lightest shadow-[3px_3px_10px_-2px_rgba(0,0,0,0.3)]'>
      <Link to={`detail/${id}`}>
        <img
          src={flag}
          alt={`flag of ${name}`}
          className={'w-full h-[190px]  object-cover cursor-pointer'}
        />
      </Link>

      <div className='p-8 border-t-2 '>
        <h1 className={`${styles.typography} text-[18px] font-bold mt-4 mb-2`}>
          {name}
        </h1>
        <p className={`${styles.typography} mb-1`}>
          Population: <span className='ml-2'>{population}</span>
        </p>
        <p className={`${styles.typography} mb-1`}>
          Region: <span className='ml-2'>{region}</span>
        </p>
        <p className={`${styles.typography}`}>
          Capital: <span className='ml-2'>{capital}</span>
        </p>
      </div>
    </div>
  )
}

export default SingleCard
