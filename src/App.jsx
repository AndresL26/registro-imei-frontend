import { Routes, Route } from 'react-router-dom'
import Scanner from './pages/Scanner'
import Equipos from './pages/Equipos'
import BarcodeScanner from "./components/BarcodeScanner"

function App() {
  const handleScan = (imei) => {
    alert("IMEI detectado: " + imei)
  }

  return <BarcodeScanner onScan={handleScan} />
}

export default App


