import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Rutas from './pages/Rutas';
import Turismo from './pages/Turismo';
import Flota from './pages/Flota';
import Contacto from './pages/Contacto';
import Reserva from './pages/Reserva';

// ==============================================================
// COMPONENTE MÁGICO: Fuerza el scroll hacia arriba al cambiar de página
// ==============================================================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sube instantáneamente a la coordenada (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      {/* Inyectamos el componente para que vigile toda la web */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#F4F6F9] font-sans overflow-x-hidden flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/rutas" element={<Rutas />} />
            <Route path="/turismo" element={<Turismo />} />
            <Route path="/flota" element={<Flota />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/reserva" element={<Reserva />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;