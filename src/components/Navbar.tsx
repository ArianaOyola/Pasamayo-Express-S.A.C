import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoEmpresa from '../assets/Logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans flex flex-col">
      
      {/* ================= BARRA SUPERIOR ================= */}
      <div className={`bg-[#050B14] w-full flex justify-between items-center px-4 lg:px-8 transition-all duration-500 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 py-1.5'
      }`}>
        <div className="flex gap-5 text-[0.7rem] font-medium text-gray-400 tracking-wide">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
             <svg className="w-3.5 h-3.5 text-pasamayo-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
             Avenida Cahuas frente a ex Electra, Huaral
          </span>
          <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
             <svg className="w-3.5 h-3.5 text-pasamayo-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
             reservas@pasamayoexpress.com
          </span>
        </div>
        <div className="flex items-center gap-3 text-[0.7rem] text-gray-400 tracking-wider font-bold">
           <span className="hidden sm:block whitespace-nowrap">SÍGUENOS:</span>
           <div className="flex items-center gap-2">
             <a href="#" className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300">
               <span className="font-serif text-[11px]">f</span>
             </a>
             <a href="#" className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all duration-300">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.011c-1.854-.002-3.666-.499-5.253-1.442l-5.778 1.517 1.542-5.632a10.957 10.957 0 01-1.47-5.466C1.072 4.417 5.586-.098 11.107-.098c5.523 0 10.016 4.515 10.016 10.086 0 5.571-4.493 10.087-10.015 10.087z"/></svg>
             </a>
           </div>
        </div>
      </div>

      {/* ================= BARRA PRINCIPAL ================= */}
      <nav className={`w-full bg-pasamayo-blue border-b border-gray-800/50 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-pasamayo-blue/95 backdrop-blur-md shadow-2xl' : 'py-3 shadow-lg'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo Corporativo Unificado */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
            
            {/* ====== DISEÑO DEFINITIVO DEL LOGO: Integrado y Estilizado ====== */}
            <div className="w-12 h-14 md:w-16 md:h-18 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 bg-gradient-to-b from-gray-800/50 to-black rounded-b-xl p-1.5 shadow-lg border-b border-l border-r border-gray-700/60 relative">
              
              {/* Línea decorativa roja en la parte superior del logo */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-pasamayo-red"></div>
              
              <img 
                src={logoEmpresa} 
                alt="Logo Pasamayo Express" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              />
            </div>
            {/* ================================================================ */}

            <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
              <div className="flex gap-1 items-baseline">
                <span className="text-xl md:text-2xl font-black text-pasamayo-red tracking-tight whitespace-nowrap">PASAMAYO</span>
                <span className="text-xl md:text-2xl font-black text-pasamayo-green tracking-tight whitespace-nowrap">EXPRESS</span>
              </div>
              <span className="text-[0.55rem] md:text-[0.65rem] font-medium tracking-widest text-gray-300 leading-tight hidden sm:block whitespace-nowrap">
                EMP. DE TRANS. TURISMO Y<br />SERVICIOS GENERALES
              </span>
            </div>
          </Link>

          {/* Menú Central */}
          <ul className="hidden xl:flex flex-1 justify-center gap-4 lg:gap-8 text-sm font-bold tracking-wide px-4">
            <li><Link to="/" className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>INICIO</Link></li>
            <li><Link to="/nosotros" className={`transition-colors duration-300 ${location.pathname === '/nosotros' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>NOSOTROS</Link></li>
            <li><Link to="/servicios" className={`transition-colors duration-300 ${location.pathname === '/servicios' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>SERVICIOS</Link></li>
            <li><Link to="/rutas" className={`transition-colors duration-300 ${location.pathname === '/rutas' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>RUTAS</Link></li>
            <li><Link to="/turismo" className={`transition-colors duration-300 ${location.pathname === '/turismo' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>TURISMO</Link></li>
            <li><Link to="/flota" className={`transition-colors duration-300 ${location.pathname === '/flota' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>FLOTA</Link></li>
            <li><Link to="/contacto" className={`transition-colors duration-300 ${location.pathname === '/contacto' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>CONTACTO</Link></li>
          </ul>

          {/* Acción de Reserva Derecha */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <Link to="/reserva" className="flex items-center gap-2 bg-pasamayo-red text-white px-6 py-2.5 rounded font-bold text-sm shadow-[0_0_15px_rgba(227,30,36,0.3)] hover:shadow-[0_0_25px_rgba(227,30,36,0.6)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
              </svg>
              RESERVA TU VIAJE
            </Link>
          </div>

          {/* Menú Móvil Toggle */}
          <div className="xl:hidden flex-shrink-0">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 focus:outline-none hover:text-pasamayo-red transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Panel Desplegable Móvil */}
        <div className={`xl:hidden absolute top-full left-0 w-full bg-pasamayo-blue/95 backdrop-blur-md border-t border-gray-700 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[450px] border-b' : 'max-h-0 border-transparent'}`}>
          <ul className="flex flex-col text-center py-4 gap-4 text-white font-bold text-sm">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">INICIO</Link></li>
            <li><Link to="/nosotros" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">NOSOTROS</Link></li>
            <li><Link to="/servicios" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">SERVICIOS</Link></li>
            <li><Link to="/rutas" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">RUTAS</Link></li>
            <li><Link to="/turismo" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">TURISMO</Link></li>
            <li><Link to="/flota" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">FLOTA</Link></li>
            <li><Link to="/contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-pasamayo-red block w-full">CONTACTO</Link></li>
            <li className="px-4">
              <Link to="/reserva" onClick={() => setMobileMenuOpen(false)} className="bg-pasamayo-red text-white block w-full py-2.5 rounded font-bold text-xs uppercase tracking-wider">RESERVA TU VIAJE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;