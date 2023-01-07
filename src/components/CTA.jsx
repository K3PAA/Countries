import React, { useEffect, useState } from 'react'

function CTA({ code }) {
  const [fullName, setFullName] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((data) => data.json())
      .then((data) => setFullName(data))
  }, [])

  return fullName[0] ? (
    <div>
      <h1 onClick={() => console.log(90)}>{fullName[0].name.common}</h1>
    </div>
  ) : (
    <h1>Fetching data</h1>
  )
}

export default CTA
