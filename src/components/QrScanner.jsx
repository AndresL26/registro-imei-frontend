import { Html5Qrcode } from "html5-qrcode"
import { useEffect } from "react"

const QrScanner = ({ onScan }) => {

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader")

    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 300,
        // 👇 CLAVE: aceptar más formatos
        formatsToSupport: [
          Html5Qrcode.FORMATS.QR_CODE,
          Html5Qrcode.FORMATS.CODE_128,
          Html5Qrcode.FORMATS.CODE_39,
          Html5Qrcode.FORMATS.EAN_13,
          Html5Qrcode.FORMATS.EAN_8,
          Html5Qrcode.FORMATS.DATA_MATRIX
        ]
      },
      (decodedText) => {
        console.log("Código detectado:", decodedText)
        onScan(decodedText)
        html5QrCode.stop()
      },
      () => {}
    )

    return () => {
      html5QrCode.stop().catch(() => {})
    }
  }, [])

  return <div id="reader" style={{ width: "320px" }} />
}

export default QrScanner
