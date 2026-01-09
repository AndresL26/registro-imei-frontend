import { Html5Qrcode } from "html5-qrcode"
import { useEffect } from "react"

const QrScanner = ({ onScan }) => {

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader")

    html5QrCode.start(
      { facingMode: "environment" }, // cámara trasera
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        console.log("QR detectado:", decodedText)
        onScan(decodedText)
        html5QrCode.stop()
      },
      () => {}
    )

    return () => {
      html5QrCode.stop().catch(() => {})
    }
  }, [])

  return (
    <div>
      <div id="reader" style={{ width: "300px" }}></div>
    </div>
  )
}

export default QrScanner
