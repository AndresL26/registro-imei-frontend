import { Html5Qrcode } from "html5-qrcode"
import { useEffect } from "react"

const QrScanner = ({ onScan }) => {

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader")

    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 300, height: 200 },
        disableFlip: false
      },
      (decodedText) => {
        console.log("Código detectado:", decodedText)

        // Limpiar espacios
        const value = decodedText.trim()

        // Validar posible IMEI (15 dígitos)
        if (/^\d{15}$/.test(value)) {
          onScan(value)
          html5QrCode.stop()
        } else {
          alert("Código leído, pero no parece un IMEI válido")
        }
      },
      () => {}
    ).catch(err => {
      console.error("Error cámara:", err)
    })

    return () => {
      html5QrCode.stop().catch(() => {})
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Escanear IMEI</h2>
      <div id="reader" style={{ width: "100%" }} />
    </div>
  )
}

export default QrScanner
