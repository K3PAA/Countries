import { Home, Detail, CTA, Error, SharedLayout } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/countries/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
