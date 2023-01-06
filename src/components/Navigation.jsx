import React from 'react'

import { BsMoon, BsMoonFill } from 'react-icons/bs'
import styles from '../style'

const Navigation = () => (
  <nav className='flex justify-between items-center py-8 px-14 shadow-[0_0_10px_-2px_rgba(0,0,0,0.3)] bg-lightest'>
    <h1 className={`${styles.typography} text-[32px] font-bold flex-1`}>
      Where in the world ?{' '}
    </h1>

    <BsMoon className='w-[24px] h-[24px] cursor-pointer' />
    <h3 className={`${styles.typography} ml-2 text-[20px]`}>Dark Mode</h3>
  </nav>
)

export default Navigation
