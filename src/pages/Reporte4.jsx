import React, { useEffect, useState } from 'react';

function Reporte4() {
  const [data, setData] = useState([]);
  const [genero, setGenero] = useState('');

  const fetchReporte = async () => {
    try {
      const url = new URL('http://localhost:3001/reporte4');
      if (genero) url.searchParams.append('genero', genero);
      url.searchParams.append('t', Date.now());

      const res = await fetch(url);
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
      <h2>Reporte 4: Asistencias por género</h2>
      <button onClick={() => window.location.href = '/'}>Volver al menú principal</button>

      <div style={{ margin: '1rem 0' }}>
        <select value={genero} onChange={e => setGenero(e.target.value)}>
          <option value="">-- Filtrar por género --</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <button onClick={fetchReporte}>Filtrar</button>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Género</th>
              <th>Total de asistencias</th>
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
      ) : (
        <p>No hay resultados para mostrar.</p>
      )}
    </div>
  );
}

export default Reporte4;
