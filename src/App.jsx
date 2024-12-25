import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const now = new Date(); // Tiempo actual
  const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000); // Fecha de hace 5 días

  const [timeLeft, setTimeLeft] = useState(
    Math.max(Math.floor((now - fiveDaysAgo) / (1000 * 60)), 0) // Diferencia en minutos
  );

  useEffect(() => {
    if (timeLeft <= 0) return; // Detener el cronómetro cuando llega a 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 60000); // Reduce 1 minuto cada 60,000 ms (1 minuto)

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, [timeLeft]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {timeLeft > 0
          ? `Tiempo restante: ${Math.floor(timeLeft / 60)} horas y ${
              timeLeft % 60
            } minutos`
          : "¡Tiempo terminado!"}
      </div>
      <p style={{ fontSize: "1.5rem", marginTop: "20px", color: "red" }}>
        Te amo ❤️
      </p>
    </div>
  );
}

export default App;