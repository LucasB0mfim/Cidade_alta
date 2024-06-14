import { Routes, Route } from 'react-router-dom'

import LogIn from './components/LogIn'
import Home from './components/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<LogIn />} />
    <Route path="/home" element={<Home />} />
  </Routes>
)

export default Rotas
