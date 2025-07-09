import React from "react";
import QRCodeReact from "react-qr-code";
import {Smartphone, Download, Zap, Hotel} from "lucide-react";

interface QRCodeProps {
  bookingUrl: string;
  title?: string;
}

const QRCode: React.FC<QRCodeProps> = ({bookingUrl, title = "Instant Booking QR"}) => {
  const downloadQR = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "mr-charles-booking-qr.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
          <Smartphone className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
          <Zap className="h-3 w-3" />
          <span>&lt;60s</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200 inline-block mb-6">
        {/* <QRCodeReact id="qr-code" value={bookingUrl} size={200} level="M" includeMargin={true} /> */}
      </div>

      <p className="text-gray-600 text-lg mb-4">Scan with your phone to book and pay in under 60 seconds</p>

      <button
        onClick={downloadQR}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 mx-auto mb-6"
      >
        <Download className="h-5 w-5" />
        <span>Download QR Code</span>
      </button>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Hotel className="h-5 w-5 text-yellow-600" />
          <h4 className="font-semibold text-yellow-800">For Hotel Partners</h4>
        </div>
        <p className="text-yellow-800 text-sm">
          Display this QR code in your lobby, concierge desk, or guest rooms. Guests can instantly book premium transportation with
          their phones.
        </p>
      </div>
    </div>
  );
};

export default QRCode;
