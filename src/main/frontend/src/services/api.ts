import axios from "axios";

export const fetchQRData = async () => {
try {
const response = await axios.get("http://localhost:8088/api/data");
return response.data;
} catch (error) {
console.error("QR 데이터 가져오기 실패:", error);
        return null;
    }
};
