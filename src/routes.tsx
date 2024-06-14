import { Routes, Route } from 'react-router-dom'

import LogIn from './components/LogIn'
import Header from './components/Header'
import Game from './components/Game'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<LogIn />} />
    <Route
      path="/home"
      element={
        <>
          <Header />
          <Game />
        </>
      }
    />
  </Routes>
)

export default Rotas
