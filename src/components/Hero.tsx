

const Hero = () => {
  return (
    <section className="relative w-full bg-cover bg-center pt-32 pb-40 lg:pt-40 lg:pb-48 font-sans mb-32" style={{ backgroundImage: "url('https://data-peru.itp.gob.pe/api/image?slug=geo&memberSlug=huaral&size=splash')", backgroundPosition: 'center' }}>
      
      {/* Overlay oscuro tipo degradado para asegurar la lectura del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent"></div>

      <div className="relative max-w-[1600px] mx-auto px-4 lg:px-8">
        
        {/* Contenedor del Texto y Beneficios */}
        <div className="w-full md:w-3/5 lg:w-[55%]">
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight text-white mb-6">
            VIAJA SEGURO,<br />
            <span className="text-pasamayo-green">VIAJA MEJOR</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-10">
            Brindamos transporte terrestre y servicios turísticos con puntualidad, seguridad y comodidad.
          </p>

          {/* Fila de 4 Beneficios */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            
            {/* 1. Viajes Seguros */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-pasamayo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <span className="text-white text-sm font-bold leading-tight">Viajes<br/>Seguros</span>
            </div>
            
            {/* 2. Puntualidad */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-pasamayo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span className="text-white text-sm font-bold leading-tight">Puntualidad<br/>Garantizada</span>
            </div>
            
            {/* 3. Atención */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[#F39C12]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <span className="text-white text-sm font-bold leading-tight">Atención<br/>Personalizada</span>
            </div>
            
            {/* 4. Experiencia */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              </div>
              <span className="text-white text-sm font-bold leading-tight">Experiencia<br/>y Confianza</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* ================= BARRA DE BÚSQUEDA FLOTANTE ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-full max-w-[1300px] px-4 z-20">
        <div className="bg-pasamayo-blue rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] p-5 md:p-6 flex flex-col lg:flex-row gap-4 lg:gap-5 items-end border border-gray-700/50">
          
          {/* Origen */}
          <div className="flex-1 w-full relative">
            <label className="text-white text-[0.65rem] font-bold mb-1.5 block tracking-widest uppercase">Origen</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-pasamayo-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              </div>
              <select className="w-full bg-white text-gray-800 rounded text-sm py-3 pl-9 pr-8 appearance-none font-semibold focus:outline-none focus:ring-2 focus:ring-pasamayo-green cursor-pointer shadow-inner">
                <option value="">¿Desde dónde partes?</option>
                <option value="huaral">Santa Rosa</option>
                <option value="lima">Pasamayo</option>
                <option value="huaral">Boza</option>
                <option value="huaral">Huaral</option>
                <option value="huaral">Otros Paraderos</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Destino */}
          <div className="flex-1 w-full relative">
            <label className="text-white text-[0.65rem] font-bold mb-1.5 block tracking-widest uppercase">Destino</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-pasamayo-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              </div>
              <select className="w-full bg-white text-gray-800 rounded text-sm py-3 pl-9 pr-8 appearance-none font-semibold focus:outline-none focus:ring-2 focus:ring-pasamayo-green cursor-pointer shadow-inner">
                <option value="">¿A dónde vas?</option>
                <option value="huaral">Santa Rosa</option>
                <option value="lima">Pasamayo</option>
                <option value="huaral">Boza</option>
                <option value="huaral">Huaral</option>
                <option value="huaral">Otros Paraderos</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Fecha */}
          <div className="flex-1 w-full relative">
            <label className="text-white text-[0.65rem] font-bold mb-1.5 block tracking-widest uppercase">Fecha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-pasamayo-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </div>
              <select className="w-full bg-white text-gray-800 rounded text-sm py-3 pl-9 pr-8 appearance-none font-semibold focus:outline-none focus:ring-2 focus:ring-pasamayo-green cursor-pointer shadow-inner">
                <option value="">Selecciona fecha</option>
                <option value="hoy">Hoy</option>
                <option value="manana">Mañana</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Pasajeros */}
          <div className="flex-1 w-full relative">
            <label className="text-white text-[0.65rem] font-bold mb-1.5 block tracking-widest uppercase">Pasajeros</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-pasamayo-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <select className="w-full bg-white text-gray-800 rounded text-sm py-3 pl-9 pr-8 appearance-none font-semibold focus:outline-none focus:ring-2 focus:ring-pasamayo-green cursor-pointer shadow-inner">
                <option value="1">1 pasajero</option>
                <option value="2">2 pasajeros</option>
                <option value="3">3 pasajeros</option>
                <option value="4">4 pasajeros</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Botón Buscar */}
          <button className="w-full lg:w-auto bg-pasamayo-red text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(227,30,36,0.3)] hover:shadow-[0_0_25px_rgba(227,30,36,0.6)] hover:-translate-y-0.5 whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            BUSCAR VIAJE
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;