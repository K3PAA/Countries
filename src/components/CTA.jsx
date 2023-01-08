import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CTA({ code }) {
  const [fullName, setFullName] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((data) => data.json())
      .then((data) => setFullName(data))
  }, [])

  return fullName[0] ? (
    <div className='cursor-pointer text-[22px] dark:hover:bg-slate-700 dark:bg-primaryD dark:text-lightest lg:text-[16px] xl:text-[30px] shadow-[2px_2px_10px_rgba(0,0,0,0.2)] hover:bg-slate-200 duration-150 transition-bg'>
      <Link to={`/countries/detail/${code}`}>
        <p className='xl:px-10 px-5 py-2'>{fullName[0].name.common}</p>
      </Link>
    </div>
  ) : (
    <h1>Fetching data</h1>
  )
}

export default CTA
