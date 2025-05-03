import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Reporte1 from './pages/Reporte1';
import Reporte2 from './pages/Reporte2';
import Reporte3 from './pages/Reporte3';
import Reporte4 from './pages/Reporte4';
import Reporte5 from './pages/Reporte5';

function Home() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Dashboard de Eventos Culturales</h1>
      <p>Selecciona un reporte:</p>
      <ul>
        <li><Link to="/reporte1">Reporte 1: Eventos por fecha y tipo</Link></li>
        <li><Link to="/reporte2">Reporte 2: Total de asistentes por evento</Link></li>
        <li><Link to="/reporte3">Reporte 3: Eventos por lugar</Link></li>
        <li><Link to="/reporte4">Reporte 4: Asistencias por género</Link></li>
        <li><Link to="/reporte5">Reporte 5: Patrocinadores por evento</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reporte1" element={<Reporte1 />} />
        <Route path="/reporte2" element={<Reporte2 />} />
        <Route path="/reporte3" element={<Reporte3 />} />
        <Route path="/reporte4" element={<Reporte4 />} />
        <Route path="/reporte5" element={<Reporte5 />} />
      </Routes>
    </Router>
  );
}

export default App;
