import { Html5Qrcode } from "html5-qrcode"
import { useEffect } from "react"

const QrScanner = ({ onScan }) => {

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader")

    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      },
      (decodedText) => {
        console.log("QR detectado:", decodedText)
        onScan(decodedText)
        html5QrCode.stop()
      },
      () => {}
    ).catch(err => {
      console.error("Error iniciando cámara:", err)
    })

    return () => {
      html5QrCode.stop().catch(() => {})
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Escanear código</h2>
      <div id="reader" style={{ width: "300px" }} />
    </div>
  )
}

export default QrScanner
