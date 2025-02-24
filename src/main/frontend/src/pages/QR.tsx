import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { fetchQRData } from "../services/api";
import QRCode from "qrcode-generator";

const QR: React.FC = () => {
    const [qrData, setQrData] = useState<string>("");

    const generateQRCode = async () => {
        const data = await fetchQRData();
        if (data) {
            const qrText = `WIFI:S:${data.ssid};T:WPA;P:${data.password};UUID:${data.uuid};;`;
            const qr = QRCode(6, "M");
            qr.addData(qrText);
            qr.make();
            setQrData(qr.createDataURL());
        }
    };

    useEffect(() => {
        generateQRCode();
        const interval = setInterval(generateQRCode, 1 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            {qrData ? <img src={qrData} alt="QR Code" /> : <p>로딩 중...</p>}
        </div>
    );
};

export default QR;
