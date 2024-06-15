import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Game from './components/Game'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
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
