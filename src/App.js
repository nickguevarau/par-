import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Navegacion from './componentes/Navegacion';
import Carta from './componentes/Carta';
import Locaciones from './componentes/Locaciones';
import Reservas from './componentes/Reservas';
import Footer from './componentes/Footer';
import Confirmacion from './componentes/Confirmacion';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Carta" element={<Carta />} />
        <Route path="/Locaciones" element={<Locaciones />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/Confirmacion" element={<Confirmacion />} />
      </Routes>
    </Router>
  );
};

export default App;