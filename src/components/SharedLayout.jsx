import { Link, Outlet } from 'react-router-dom'
import Navigation from './Navigation'

function SharedLayout() {
  return (
    <main className='bg-secondaryW'>
      <Navigation />
      <Outlet />
    </main>
  )
}

export default SharedLayout
