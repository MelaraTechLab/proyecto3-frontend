import React, { useEffect, useState } from 'react';

function Reporte5() {
  const [data, setData] = useState([]);
  const [evento, setEvento] = useState('');

  const fetchReporte = async () => {
    try {
      const url = new URL('http://localhost:3001/reporte5');
      if (evento) url.searchParams.append('evento', evento);
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
      <h2>Reporte 5: Patrocinadores por evento</h2>
      <button onClick={() => window.location.href = '/'}>Volver al menú principal</button>

      <div style={{ margin: '1rem 0' }}>
        <input
          type="text"
          placeholder="Filtrar por nombre de evento"
          value={evento}
          onChange={e => setEvento(e.target.value)}
        />
        <button onClick={fetchReporte}>Filtrar</button>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Evento</th>
              <th>Total de patrocinadores</th>
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

export default Reporte5;
