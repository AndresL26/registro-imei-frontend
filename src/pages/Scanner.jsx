import QrScanner from '../components/QrScanner'

const Scanner = () => {

  const handleScan = (imei) => {
    console.log("IMEI escaneado:", imei)
    alert(`IMEI detectado: ${imei}`)
  }

  return (
    <div>
      <h1>Escanear IMEI</h1>
      <QrScanner onScan={handleScan} />
    </div>
  )
}

export default Scanner
