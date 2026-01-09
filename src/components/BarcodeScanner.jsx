import { useEffect } from "react"
import Quagga from "quagga"

const BarcodeScanner = ({ onScan }) => {

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: document.querySelector("#barcode-reader"),
          constraints: {
            facingMode: "environment"
          }
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader"
          ]
        }
      },
      (err) => {
        if (err) {
          console.error(err)
          return
        }
        Quagga.start()
      }
    )

    Quagga.onDetected((data) => {
      const code = data.codeResult.code
      console.log("Código leído:", code)

      if (/^\d{15}$/.test(code)) {
        onScan(code)
        Quagga.stop()
      }
    })

    return () => {
      Quagga.stop()
    }
  }, [])

  return (
    <div>
      <h2>Escanear código de barras (IMEI)</h2>
      <div id="barcode-reader" style={{ width: "100%" }} />
    </div>
  )
}

export default BarcodeScanner
