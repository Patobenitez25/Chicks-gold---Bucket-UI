import { useState } from "react";

export default function WaterJugApp() {
const [X, setX] = useState(5);
const [Y, setY] = useState(3);
const [Z, setZ] = useState(4);
const [solution, setSolution] = useState([]);
const [error, setError] = useState("");

const handleSolve = async () => {
    setSolution([]);
    setError("");

    try {
    const response = await fetch("https://chicks-gold-bucket-challenge-backend-pg7jkoudg.vercel.app/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ X, Y, Z }),
    });

    const data = await response.json();
        if (data.solution) {
            setSolution(data.solution);
        } else {
            setError("No hay una solución posible con los valores ingresados.");
        }
    } catch (err) {
        setError("No se pudo conectar con el servidor. Inténtalo de nuevo.");
    }
    };

    return (
    <div className="container">
        <h2 className="title">Solucionador de Jarras de Agua</h2>
        <div className="input-group">
            <label>Capacidad de la jarra X:</label>
            <input type="number" value={X} onChange={(e) => setX(Number(e.target.value))} />
        </div>
        <div className="input-group">
            <label>Capacidad de la jarra Y:</label>
            <input type="number" value={Y} onChange={(e) => setY(Number(e.target.value))} />
        </div>
        <div className="input-group">
            <label>Objetivo Z:</label>
            <input type="number" value={Z} onChange={(e) => setZ(Number(e.target.value))} />
        </div>
        <button onClick={handleSolve} className="solve-button">
        Resolver
        </button>
        {error && <p className="error">⚠️ {error}</p>}
        <div className="solution-box">
        <ul>
            <h3>Paso a paso:</h3>
            {solution.length > 0 ? (
                solution.map((step, index) => (
                    <li key={index}>✅ {step}</li>
                    ))
                    ) : (
                        <p>Ingrese valores y haga clic en "Resolver" para ver el resultado.</p>
                        )}
        </ul>
        </div>
    </div>
  );
}
