import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

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

      {Array.isArray(data) && data.length > 0 ? (
        <>
          <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Total de asistentes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td>{row.clave}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ marginTop: '2rem' }}>Visualización gráfica</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="clave" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p style={{ marginTop: '1rem' }}>No hay resultados.</p>
      )}
    </div>
  );
}

export default Reporte2;
