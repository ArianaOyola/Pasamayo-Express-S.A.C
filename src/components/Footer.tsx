
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050B14] text-white font-sans border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <div className="flex gap-1 items-baseline">
            <span className="text-xl font-black text-pasamayo-red tracking-tight">PASAMAYO</span>
            <span className="text-xl font-black text-pasamayo-green tracking-tight">EXPRESS</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            Empresa líder de transporte turístico e interurbano en el Norte Chico. Conectando paraderos de forma rápida, ágil y segura.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">Enlaces</h4>
          <ul className="space-y-2 text-xs font-bold text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link to="/rutas" className="hover:text-white transition-colors">Rutas de Colectivo</Link></li>
            <li><Link to="/turismo" className="hover:text-white transition-colors">Turismo VIP</Link></li>
          </ul>
        </div>

        {/* Columna 3: Terminal */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">Estación Huaral</h4>
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            <strong>Terminal Principal:</strong><br/>
            Avenida Cahuas frente a ex Electra, Huaral, Perú.
          </p>
        </div>

        {/* Columna 4: CTA de Acción Inferior */}
        <div className="space-y-4">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">¿Listo para viajar?</h4>
          <p className="text-xs text-gray-400 font-medium">Garantiza tu minivan de 8 o 10 asientos de forma digital.</p>
          
          {/* Botón de la parte de abajo de la página enlazado a Reservas */}
          <Link 
            to="/reserva" 
            className="inline-flex items-center gap-2 bg-[#0A1220] border border-gray-800 text-pasamayo-green px-5 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-md hover:bg-pasamayo-red hover:text-white hover:border-pasamayo-red transition-all duration-300 w-full justify-center"
          >
            🚀 Reserva vía Web
          </Link>
        </div>

      </div>

      <div className="bg-[#02060D] py-4 text-center text-[0.65rem] font-bold text-gray-500 tracking-wider border-t border-gray-900">
        © {new Date().getFullYear()} PASAMAYO EXPRESS S.A.C. TODOS LOS DERECHOS RESERVADOS.
      </div>
    </footer>
  );
};

export default Footer;