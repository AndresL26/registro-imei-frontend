import { Routes, Route } from 'react-router-dom'
import Scanner from './pages/Scanner'
import Equipos from './pages/Equipos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Scanner />} />
      <Route path="/equipos" element={<Equipos />} />
    </Routes>
  )
}

export default App
