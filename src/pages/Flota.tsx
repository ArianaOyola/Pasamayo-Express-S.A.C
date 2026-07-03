import React from 'react';

const Flota = () => {
  // Catálogo real de la flota de Pasamayo Express
  const vehiculos = [
    {
      tipo: 'Espacio y Rentabilidad',
      nombre: 'Minivan Ejecutiva (10 Pasajeros)',
      capacidad: '10 Pasajeros + Conductor',
      marcas: 'Changan / DFSK / Shineray',
      ideal: 'Ruta Diaria Colectivo y Turismo Grupal',
      img: 'https://derco-pe-prod.s3.amazonaws.com/medias/changan/migration/front-image/grand-van-turismo/SC6483A4-M3KT-PE_Blanco.jpg', // Imagen referencial minivan
      specs: ['Asientos Ergonómicos', 'Ventilación Óptima', 'Cinturones de Seguridad', 'Amplia Maletera'],
      reverse: false
    },
    {
      tipo: 'Agilidad y Confort',
      nombre: 'Minivan Express (8 Pasajeros)',
      capacidad: '8 Pasajeros + Conductor',
      marcas: 'Changan / DFSK / Shineray',
      ideal: 'Viajes Rápidos y Traslados Privados',
      img: 'https://derco-pe-prod.s3.amazonaws.com/medias/changan/migration/front-image/new-van/SC6406A-F2K_Blanco.jpg', // Imagen referencial minivan
      specs: ['Mayor Espacio por Pasajero', 'Salidas Más Rápidas', 'Climatización', 'Suspensión Suave'],
      reverse: true
    }
  ];

  return (
    <div className="w-full bg-[#F4F6F9] font-sans pb-24 overflow-hidden">
      
      {/* ================= 1. BANNER SUPERIOR CORPORATIVO (PATRÓN UNIFICADO) ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://foton.pe/wp-content/uploads/2019/02/FEB-19-MINIVAN-8-y-11-asientos.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>NUESTRAS UNIDADES</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Nuestra <span className="text-pasamayo-green">Flota</span>
          </h1>
        </div>
      </section>

      {/* ================= 2. DESCRIPCIÓN INTRODUCTORIA ================= */}
      <section className="text-center max-w-3xl mx-auto mt-16 mb-20 px-4">
         <h2 className="text-3xl font-black text-pasamayo-blue tracking-tight mb-4 uppercase">Agilidad en cada viaje</h2>
         <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
           En Pasamayo Express contamos con una flota moderna y estandarizada de minivans, diseñadas específicamente para ofrecer un viaje rápido, seguro y confortable. Confiamos en el rendimiento de marcas líderes en el mercado para garantizar que siempre llegues a tiempo.
         </p>
         
         {/* Marcas de Confianza */}
         <div className="flex items-center justify-center gap-6 md:gap-12 mt-8 opacity-70">
           <span className="text-xl md:text-2xl font-black text-gray-400 uppercase tracking-widest">CHANGAN</span>
           <span className="text-xl md:text-2xl font-black text-gray-400 uppercase tracking-widest">SHINERAY</span>
           <span className="text-xl md:text-2xl font-black text-gray-400 uppercase tracking-widest">DFSK</span>
         </div>
      </section>

      {/* ================= 3. CATÁLOGO DE VEHÍCULOS (SHOWCASE) ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 space-y-24">
        {vehiculos.map((vehiculo, index) => (
          <div key={index} className={`flex flex-col ${vehiculo.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
            
            {/* Lado Imagen */}
            <div className="w-full lg:w-3/5 relative group">
              {/* Brillo de fondo decorativo */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${index === 1 ? 'bg-pasamayo-yellow/20' : 'bg-pasamayo-blue/20'} rounded-full blur-[100px] -z-10 transition-colors`}></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
                <img 
                  src={vehiculo.img} 
                  alt={vehiculo.nombre} 
                  className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-[#050B14]/20 to-transparent opacity-80"></div>
                
                {/* Etiqueta Flotante sobre la imagen */}
                <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-xl">
                  <span className="text-white font-bold text-xs tracking-wider uppercase">Unidad Homologada</span>
                </div>
              </div>
            </div>

            {/* Lado Información */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <span className="text-[0.65rem] font-black text-pasamayo-red tracking-widest uppercase block mb-3">
                {vehiculo.tipo}
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-pasamayo-blue tracking-tight leading-tight mb-4">
                {vehiculo.nombre}
              </h3>
              <p className="text-gray-500 font-medium text-[0.9rem] mb-6">
                Con respaldo técnico de <strong className="text-gray-700">{vehiculo.marcas}</strong>, estas unidades están preparadas para la exigencia de nuestra ruta, brindando seguridad y tranquilidad a los pasajeros.
              </p>
              
              {/* Cajas de Stats Rápidas */}
              <div className="flex gap-4 mb-8">
                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex-1 border-b-2 border-b-pasamayo-green hover:-translate-y-1 transition-transform">
                  <span className="block text-[0.6rem] font-bold text-gray-400 uppercase tracking-wider mb-1">Capacidad</span>
                  <span className="block text-sm font-black text-pasamayo-blue">{vehiculo.capacidad}</span>
                </div>
                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex-1 border-b-2 border-b-pasamayo-blue hover:-translate-y-1 transition-transform">
                  <span className="block text-[0.6rem] font-bold text-gray-400 uppercase tracking-wider mb-1">Uso Ideal</span>
                  <span className="block text-sm font-black text-pasamayo-blue truncate" title={vehiculo.ideal}>{vehiculo.ideal}</span>
                </div>
              </div>

              {/* Lista de Specs con Iconos */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 mb-8">
                <span className="text-[0.65rem] font-black text-pasamayo-green tracking-widest uppercase block mb-4 ml-2">Equipamiento Interno:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehiculo.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-[0.8rem] font-bold text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-pasamayo-green flex-shrink-0 text-xs">
                        ✔
                      </div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* ================= 4. PILARES DE SEGURIDAD (PANEL OSCURO ELEGANTE) ================= */}
      <section className="mt-28 bg-[#050B14] py-20 relative overflow-hidden">
        {/* Fondos Decorativos */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pasamayo-blue/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pasamayo-red/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">Mantenimiento Riguroso</h2>
            <p className="text-gray-400 font-medium text-sm md:text-base max-w-2xl mx-auto">
              Nuestras minivans pasan por estrictos controles mecánicos antes de salir a la ruta. Tu seguridad no es negociable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔧', title: 'Revisión Técnica', desc: 'Mantenimiento preventivo periódico a los motores y frenos.' },
              { icon: '📡', title: 'Control de Ruta', desc: 'Monitoreo de velocidad y ubicación durante el viaje.' },
              { icon: '🧼', title: 'Higiene Total', desc: 'Limpieza y desinfección interna de la cabina al finalizar cada ruta.' },
              { icon: '👨‍✈️', title: 'Conductores A1', desc: 'Personal homologado con amplia experiencia en la ruta Huaral - Lima.' }
            ].map((pilar, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto bg-[#050B14] rounded-full flex items-center justify-center text-2xl mb-5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                  {pilar.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-2">{pilar.title}</h4>
                <p className="text-[0.8rem] text-gray-400 leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Flota;