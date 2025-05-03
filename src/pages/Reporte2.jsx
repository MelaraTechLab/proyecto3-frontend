import React, { useEffect, useState } from 'react';

function Reporte2() {
  const [data, setData] = useState([]);

  const fetchReporte = async () => {
    try {
      const res = await fetch('http://localhost:3001/reporte2');
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error al cargar el reporte:", err.message);
      alert("Error al cargar los datos: " + err.message);
    }
  };

  useEffect(() => {
    fetchReporte();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Reporte 2: Total de asistentes por evento</h2>
      <button onClick={() => window.location.href = '/'}>Volver al menú principal</button>
      <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Total de asistentes</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan="2">No hay resultados</td></tr>
          ) : (
            data.map((row, i) => (
              <tr key={i}>
                <td>{row.clave}</td>
                <td>{row.total}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Reporte2;
