

const Services = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-10 lg:py-12 font-sans mt-16 lg:mt-8">
      
      {/* Título de la Sección (Más pegado a las tarjetas) */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-pasamayo-blue tracking-tight uppercase mb-2.5">
          Nuestros Servicios
        </h2>
        {/* Líneas de colores */}
        <div className="flex justify-center gap-1.5">
          <div className="w-6 h-1 bg-pasamayo-red rounded-full"></div>
          <div className="w-6 h-1 bg-pasamayo-green rounded-full"></div>
          <div className="w-6 h-1 bg-pasamayo-blue rounded-full"></div>
          <div className="w-6 h-1 bg-pasamayo-yellow rounded-full"></div>
        </div>
      </div>

      {/* Grid Principal (3 Columnas, Espacios Reducidos) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        
        {/* ================= TARJETA 1: TRANSPORTE INTERURBANO ================= */}
        <div className="bg-gradient-to-br from-[#F0FDF4] to-white border border-green-100 rounded-xl p-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
          {/* Contenedor de Imagen (Más pequeño) */}
          <div className="w-full sm:w-[45%] lg:w-full xl:w-[45%] flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
            <img 
              src="https://elcomercio.pe/resizer/v2/6GLHQNUTCBGHFDZFBUKZ72776U.jpg?auth=52f0b2d2970a8dcbbca4494de273d866c3ec5ff802e1ad2407d55ab52ee1cf22&width=1200&height=1200&quality=75&smart=true" 
              alt="Transporte Interurbano" 
              className="w-full h-32 sm:h-full lg:h-32 xl:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Contenido (Más compacto) */}
          <div className="w-full sm:w-[55%] lg:w-full xl:w-[55%] flex flex-col justify-center">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-7 h-7 bg-pasamayo-green rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h3 className="font-bold text-pasamayo-blue text-[0.85rem] leading-tight">Transporte Interurbano<br/><span className="text-gray-500 text-[0.65rem] font-medium">(Taxi Colectivo)</span></h3>
            </div>
            <p className="text-gray-600 text-[0.7rem] leading-snug mb-3">
              Conectamos Huaral con los principales destinos de manera rápida y segura.
            </p>
            <button className="bg-pasamayo-green text-white font-bold text-[0.65rem] py-1.5 px-3 rounded w-fit hover:bg-green-700 transition-colors flex items-center gap-1.5 mt-auto">
              VER RUTAS <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>

        {/* ================= TARJETA 2: SERVICIOS TURÍSTICOS ================= */}
        <div className="bg-gradient-to-br from-[#FFFBEB] to-white border border-yellow-100 rounded-xl p-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
          {/* Contenedor de Imagen */}
          <div className="w-full sm:w-[45%] lg:w-full xl:w-[45%] flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
            <img 
              src="https://sierraverdeperu.net/site/images/destinos/chancay.jpg" 
              alt="Servicios Turísticos" 
              className="w-full h-32 sm:h-full lg:h-32 xl:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Contenido */}
          <div className="w-full sm:w-[55%] lg:w-full xl:w-[55%] flex flex-col justify-center">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-7 h-7 bg-pasamayo-yellow rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="font-bold text-pasamayo-blue text-[0.85rem] leading-tight mt-1">Servicios Turísticos</h3>
            </div>
            <p className="text-gray-600 text-[0.7rem] leading-snug mb-3">
              Descubre los mejores destinos con tours personalizados para ti o tu grupo.
            </p>
            <button className="bg-pasamayo-yellow text-white font-bold text-[0.65rem] py-1.5 px-3 rounded w-fit hover:bg-yellow-600 transition-colors flex items-center gap-1.5 mt-auto">
              VER TOURS <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>

        {/* ================= LISTA DE VENTAJAS (DERECHA - ALTURA BALANCEADA) ================= */}
        <div className="flex flex-col justify-between h-full gap-2.5 pl-0 lg:pl-2">
          
          <div className="relative bg-white border border-gray-100 p-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-pasamayo-red/30 transition-all duration-300 group cursor-pointer flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pasamayo-red transition-colors duration-300">
               <svg className="w-4 h-4 text-pasamayo-red group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>
              <h4 className="text-[0.8rem] font-bold text-pasamayo-blue leading-none mb-1 group-hover:text-pasamayo-red transition-colors">Seguridad</h4>
              <p className="text-[0.65rem] text-gray-500 leading-tight">Flota moderna y conductores profesionales.</p>
            </div>
          </div>

          <div className="relative bg-white border border-gray-100 p-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-pasamayo-green/30 transition-all duration-300 group cursor-pointer flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pasamayo-green transition-colors duration-300">
               <svg className="w-4 h-4 text-pasamayo-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-[0.8rem] font-bold text-pasamayo-blue leading-none mb-1 group-hover:text-pasamayo-green transition-colors">Puntualidad</h4>
              <p className="text-[0.65rem] text-gray-500 leading-tight">Cumplimos con tus horarios de viaje.</p>
            </div>
          </div>

          <div className="relative bg-white border border-gray-100 p-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-pasamayo-yellow/30 transition-all duration-300 group cursor-pointer flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-yellow-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pasamayo-yellow transition-colors duration-300">
               <svg className="w-4 h-4 text-pasamayo-yellow group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-[0.8rem] font-bold text-pasamayo-blue leading-none mb-1 group-hover:text-pasamayo-yellow transition-colors">Confianza</h4>
              <p className="text-[0.65rem] text-gray-500 leading-tight">Más de 10 años de experiencia.</p>
            </div>
          </div>

          <div className="relative bg-white border border-gray-100 p-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300 group cursor-pointer flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
               <svg className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
            <div>
              <h4 className="text-[0.8rem] font-bold text-pasamayo-blue leading-none mb-1 group-hover:text-blue-500 transition-colors">Calidad</h4>
              <p className="text-[0.65rem] text-gray-500 leading-tight">Servicio cómodo y eficiente.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;