import React, { useEffect, useState } from 'react';

function Reporte3() {
  const [data, setData] = useState([]);
  const [lugar, setLugar] = useState('');

  const fetchReporte = async () => {
    try {
      const url = new URL('http://localhost:3001/reporte3');
      if (lugar) url.searchParams.append('lugar', lugar);
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
      <h2>Reporte 3: Eventos por lugar</h2>
      <button onClick={() => window.location.href = '/'}>Volver al menú principal</button>

      <div style={{ margin: '1rem 0' }}>
        <input
          type="text"
          placeholder="Filtrar por lugar"
          value={lugar}
          onChange={e => setLugar(e.target.value)}
        />
        <button onClick={fetchReporte}>Filtrar</button>
      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Lugar</th>
            <th>Total de eventos</th>
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

export default Reporte3;