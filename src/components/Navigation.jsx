import React from 'react'

import { BsMoon, BsMoonFill } from 'react-icons/bs'
import styles from '../style'
import { useGlobalContext } from './context'

const Navigation = () => {
  const { theme, changeTheme } = useGlobalContext()

  return (
    <div className='shadow-[0_0_10px_-2px_rgba(0,0,0,0.3)] dark:bg-primaryD'>
      <nav className='xl:max-w-[1660px] max-w-[1180px] mx-auto flex justify-between items-center py-8 px-6 xs:px-14  bg-lightest dark:text-lightest dark:bg-primaryD'>
        <h1
          className={`${styles.typography} sm:text-[32px] text-[18px] font-bold flex-1`}
        >
          Where in the world ?
        </h1>

        {theme === 'dark' ? (
          <BsMoonFill className='icon' onClick={changeTheme} />
        ) : (
          <BsMoon className='icon' onClick={changeTheme} />
        )}
        <h3
          className={`${styles.typography} ml-2 text-[20px] sm:block hidden cursor-pointer`}
          onClick={changeTheme}
        >
          Dark Mode
        </h3>
      </nav>
    </div>
  )
}

export default Navigation
