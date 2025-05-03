import React, { useState, useEffect } from 'react';

function Reporte1() {
  const [data, setData] = useState([]);
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [tipo, setTipo] = useState('');
  const [lugar, setLugar] = useState('');

  const fetchReporte = async () => {
    try {
      const url = new URL('http://localhost:3001/reporte1');
      if (desde) url.searchParams.append('desde', desde);
      if (hasta) url.searchParams.append('hasta', hasta);
      if (tipo) url.searchParams.append('tipo', tipo);
      if (lugar) url.searchParams.append('lugar', lugar);
      url.searchParams.append('t', Date.now());

      setData([]);

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

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
      <h2>Reporte 1: Eventos por fecha, tipo y lugar</h2>
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

        <select value={lugar} onChange={e => setLugar(e.target.value)}>
          <option value="">-- Lugar --</option>
          <option value="Lugar 1">Lugar 1</option>
          <option value="Lugar 2">Lugar 2</option>
          <option value="Lugar 3">Lugar 3</option>
          <option value="Lugar 4">Lugar 4</option>
          <option value="Lugar 5">Lugar 5</option>
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
        {Array.isArray(data) && data.length > 0 ? (
  data.map((evento, i) => (
    <tr key={i}>
      <td>{evento.nombre}</td>
      <td>{evento.fecha.slice(0, 10)}</td>
      <td>{evento.lugar}</td>
      <td>{evento.tipo}</td>
    </tr>
  ))
) : (
  <tr><td colSpan="4">No hay resultados</td></tr>
)}

        </tbody>
      </table>

      <button onClick={() => window.location.href = '/'}>Volver al menú principal</button>
    </div>
  );
}

export default Reporte1;
