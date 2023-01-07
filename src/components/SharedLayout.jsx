import { Link, Outlet } from 'react-router-dom'
import Navigation from './Navigation'

function SharedLayout() {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  )
}

export default SharedLayout
