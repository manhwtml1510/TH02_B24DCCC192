import axios from "axios";
import { useState } from "react";

const Bai1 = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    const res = await axios.get(`https://wttr.in/${city}?format=j1`);
    setWeather(res.data);
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>Thời tiết</h2>

        <div style={inputContainer}>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Tìm tên thành phố nào hihihi"
            style={input}
          />
          <button onClick={fetchWeather} style={button}>
            Xem
          </button>
        </div>

        {weather && (
          <div style={result}>
            <p style={temp}>
              <strong>Nhiệt độ:</strong> {weather.current_condition[0].temp_C}°C
            </p>
            <p>{weather.current_condition[0].weatherDesc[0].value}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const page: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "80vh",
  backgroundColor: "#f5f5f5",
};

const card: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "90%",
  maxWidth: "600px",
};

const title: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "20px",
};

const inputContainer: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const input: React.CSSProperties = {
  flex: 1,
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const button: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "10px 18px",
  cursor: "pointer",
  fontWeight: "500",
};

const result: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "15px",
  border: "1px solid #eee",
};

const temp: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "600",
};

export default Bai1;
