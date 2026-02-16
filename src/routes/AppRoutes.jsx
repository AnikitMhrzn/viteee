<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home.jsx'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useReducer" element={<useReducer />} />
      </Routes>
    </BrowserRouter>
  )
}
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home.jsx'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useReducer" element={<useReducer />} />
      </Routes>
    </BrowserRouter>
  )
}
>>>>>>> c6c817b7800d04cc16794c4596e5f976b5401232
s