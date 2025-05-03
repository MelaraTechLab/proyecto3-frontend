import React, { useState, useEffect } from 'react';

function Reporte1() {
  const [data, setData] = useState([]);
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [tipo, setTipo] = useState('');

  const fetchReporte = async () => {
    try {
      const url = new URL('http://localhost:3001/reporte1');
      if (desde) url.searchParams.append('desde', desde);
      if (hasta) url.searchParams.append('hasta', hasta);
      if (tipo) url.searchParams.append('tipo', tipo);
      url.searchParams.append('t', Date.now()); 
      setData([]);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error al cargar reporte:", err.message);
      alert("Error al cargar los datos: " + err.message);
    }
  };

  useEffect(() => {
    fetchReporte();
  }, []);

  return (
    <div>
      <h2>Reporte 1: Eventos por fecha y tipo</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input type="date" value={desde} onChange={e => setDesde(e.target.value)} />
        <input type="date" value={hasta} onChange={e => setHasta(e.target.value)} />
        <select value={tipo} onChange={e => setTipo(e.target.value)}>
  <option value="">-- Tipo de evento --</option>
  <option value="General">General</option>
  <option value="Conferencia">Conferencia</option>
  <option value="Taller">Taller</option>
  <option value="Festival">Festival</option>
</select>

        <button onClick={fetchReporte}>Filtrar</button>
      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan="4">No hay resultados</td></tr>
          ) : (
            data.map((evento, i) => (
              <tr key={i}>
                <td>{evento.nombre}</td>
                <td>{evento.fecha.slice(0, 10)}</td>
                <td>{evento.lugar}</td>
                <td>{evento.tipo}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button onClick={() => window.location.href = '/'}>Volver al menú principal</button>

    </div>
    
  );
}

export default Reporte1;
