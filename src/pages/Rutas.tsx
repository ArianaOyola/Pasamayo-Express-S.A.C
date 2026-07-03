import { useState } from 'react';
import imagenRuta from '../assets/rutas.jpg';

const Rutas = () => {
  const [showStops, setShowStops] = useState(false);

  // Lista oficial de paraderos
  const paraderos = [
    { name: 'Avichan' }, { name: 'Caseta' }, { name: 'La Palmera' },
    { name: 'Chacraymar' }, { name: 'Paradero de Chasqui' }, 
    { name: 'Colegio Pasamayo', isHub: true }, { name: 'Zapata' }, 
    { name: 'Salinitas' }, { name: 'Gramadales' }, { name: 'La Piedra' }, 
    { name: 'Leyva' }, { name: 'Entrada de Boza' }, { name: 'Candelaria' }, 
    { name: 'Boza', isHub: true }, { name: 'La Uva' }, { name: 'El Alto' }, 
    { name: 'San Blas' }, { name: 'San Fernando' }, { name: 'Santa Elena' }, 
    { name: 'Makaton' }, { name: 'La Huaca' }, { name: 'Colegio 21' }, 
    { name: 'Mercado Modelo' }, { name: 'Paradero de Z Bus' }, { name: 'Colegio Carmen' }
  ];

  return (
    <div className="w-full bg-[#F4F6F9] font-sans pb-24 overflow-hidden">
      
      {/* ================= 1. BANNER SUPERIOR ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8vgub7bSY_ZQiTlaooUJ3EeWzwnB1pnxzA&s')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>NUESTROS RECORRIDOS</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Rutas Oficiales
          </h1>
        </div>
      </section>

      {/* ================= 2. CONTENIDO DE RECORRIDO (FUSIÓN GLOW + STICKY) ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 relative">
          
          {/* LADO IZQUIERDO: Mapa GPS Oscuro */}
          <div className="bg-[#050B14] rounded-[2rem] shadow-[0_20px_50px_rgba(5,11,20,0.5)] border border-gray-800 p-8 md:p-12 relative overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-pasamayo-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pasamayo-red/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-10 relative z-10">
              <span className="text-[0.65rem] font-black text-pasamayo-green tracking-widest uppercase flex items-center gap-2 bg-[#050B14]/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-pasamayo-green animate-pulse shadow-[0_0_8px_#188351]"></span>
                GPS Ruta Troncal Activa
              </span>
            </div>

            {/* CAJA DEL VIAJE */}
            <div className="relative bg-[#0A1220] rounded-3xl p-6 md:p-10 border border-gray-800 shadow-inner flex-grow z-10">
              {/* Origen */}
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 bg-[#0A1220] rounded-full flex items-center justify-center text-xl shadow-[0_0_20px_rgba(24,131,81,0.5)] border-4 border-pasamayo-green flex-shrink-0 z-10 animate-pulse">
                  📍
                </div>
                <div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-1">Punto de Partida</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">SANTA ROSA</h3>
                </div>
              </div>

              {/* Línea de Neón y Botón Expansible */}
              <div className="relative pl-7 py-6 ml-[1.65rem] border-l-4 border-dashed border-gray-700">
                <div className="absolute left-[-4px] top-0 bottom-0 w-1 bg-pasamayo-blue rounded-full shadow-[0_0_15px_rgba(0,119,182,0.8)] opacity-50"></div>

                <button 
                  onClick={() => setShowStops(!showStops)}
                  className="bg-[#050B14] border border-gray-800 shadow-sm text-pasamayo-green text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:border-pasamayo-green hover:text-white transition-all flex items-center gap-2 group -ml-[2.2rem] relative z-10"
                >
                  <span className="w-6 h-6 bg-pasamayo-green text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {showStops ? '−' : '+'}
                  </span>
                  {showStops ? 'Ocultar Paraderos' : 'Ver 25 Paraderos Intermedios'}
                </button>

                {/* Lista Desplegable */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showStops ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pl-4 pb-4">
                    {paraderos.map((stop, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${stop.isHub ? 'bg-pasamayo-green ring-2 ring-green-900 shadow-[0_0_8px_#188351]' : 'bg-gray-700'}`}></div>
                        <span className={`text-sm ${stop.isHub ? 'font-bold text-white' : 'font-medium text-gray-400'}`}>
                          {stop.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Destino */}
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 bg-pasamayo-blue rounded-full flex items-center justify-center text-xl shadow-[0_0_20px_rgba(227,30,36,0.5)] border-4 border-white flex-shrink-0 z-10">
                  🏁
                </div>
                <div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-1">Terminal Final</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase">Cahuas</h3>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Imagen Flotante Fija */}
          <div className="relative w-full h-full">
            <div className="sticky top-28 rounded-[2rem] overflow-hidden w-full h-[400px] lg:h-[550px] shadow-2xl border-4 border-white group">
              <img 
                    src={imagenRuta} 
                     alt="Unidad Pasamayo Express en Ruta" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-pasamayo-red text-xs font-bold uppercase tracking-widest block mb-2">Flota Certificada</span>
                <h4 className="text-2xl font-black text-white tracking-tight leading-tight">Conectamos Santa Rosa y Cahuas con seguridad absoluta.</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Rutas;