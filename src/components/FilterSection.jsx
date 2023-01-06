import React from 'react'
import styles from '../style'
import { HiOutlineSearch } from 'react-icons/hi'
import { useGlobalContext } from './context'

const FilterSection = () => {
  const { handleSort, sort } = useGlobalContext()

  return (
    <div className='flex justify-between items-center mb-16'>
      <div className='flex items-center mt-12 shadow-[3px_3px_10px_-2px_rgba(0,0,0,0.3)] pl-4 bg-lightest'>
        <HiOutlineSearch className='text-primaryW w-[20px] h-[20px]' />
        <input
          type='text'
          placeholder='Search for a country...'
          className='sm:w-max-[400px] w-[200px] ml-4 py-4'
        />
      </div>

      <select
        name='continent'
        value={sort}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value='ByRegion'>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europa'>Europa</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default FilterSection
