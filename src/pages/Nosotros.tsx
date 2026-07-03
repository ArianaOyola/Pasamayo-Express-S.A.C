

const Nosotros = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans pb-24">
      
      {/* ================= 1. BANNER INTERNO ELEGANTE ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/3d/d6/55.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>CONÓCENOS</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Nuestra <span className="text-pasamayo-green">Historia</span>
          </h1>
        </div>
      </section>

      {/* ================= 2. BENTO GRID (CON TARJETA DE FOTO) ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ----- FILA 1: QUIÉNES SOMOS (2 cols) + FOTO (1 col) ----- */}
          
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-pasamayo-blue/5 rounded-full blur-3xl group-hover:bg-pasamayo-blue/10 transition-colors duration-500"></div>
            
            <h2 className="text-2xl lg:text-3xl font-black text-pasamayo-blue mb-4 tracking-tight">
              Quiénes Somos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-[0.9rem] lg:text-[0.95rem] font-medium relative z-10">
              Nacimos con la firme convicción de revolucionar el transporte en la ruta Huaral - Boza - Pasamayo. Lo que comenzó como un modesto emprendimiento con una pequeña flota, se ha transformado en la empresa líder de transporte Interurbano y servicios turísticos de la región.
            </p>
            <p className="text-gray-600 leading-relaxed text-[0.9rem] lg:text-[0.95rem] font-medium relative z-10">
              En <strong className="text-pasamayo-red">Pasamayo Express</strong>, entendemos que no solo transportamos pasajeros; conectamos familias, impulsamos negocios y aseguramos aventuras turísticas inolvidables. Por ello, cada unidad y conductor está rigurosamente preparado para garantizar tu bienestar.
            </p>
          </div>

          {/* LA FOTO: Tarjeta Dedicada a la Imagen */}
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] relative group min-h-[300px]">
            {/* Aquí puedes poner la foto real de tu equipo o de tus furgonetas */}
            <img 
              src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/80373451_833382690450739_2499308793154764800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4unArGb7HzMCfUu_cOTwPn_esdPOy4Qqf96x087LhCkEgUFFAVrgI4VMRNmFCBuDBp1mMpVpDSfnojwOmPubj&_nc_ohc=Irekhtj9gp8Q7kNvwFrQNks&_nc_oc=Adr3-fGBU4NpQhINoiq2-hrCOatmj_mDCmp3_Df6VLvDIQFQrcUlWZI8wUrcIqbQTUI&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=KoaH6VFUPShrdi2986O8ug&_nc_ss=7b2a8&oh=00_Af4nzGL7X1SuGry2VRvjd-KPVHsspn9cm7NzqooOoFYhnQ&oe=6A33457A" 
              alt="Nuestra Flota y Equipo" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Degradado oscuro para que el texto se lea bien */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/90 via-[#050B14]/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <span className="text-pasamayo-green font-bold text-[0.65rem] tracking-widest uppercase mb-1 block">Nuestra Fuerza</span>
               <span className="text-white font-bold text-lg leading-tight block">Flota moderna y el mejor equipo a tu servicio.</span>
            </div>
          </div>

          {/* ----- FILA 2: EXPERIENCIA + MISIÓN + VISIÓN ----- */}

          <div className="bg-pasamayo-blue rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 min-h-[250px]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
            <span className="text-6xl lg:text-7xl font-black text-white relative z-10 mb-2 tracking-tighter">
              10<span className="text-pasamayo-red">+</span>
            </span>
            <span className="text-pasamayo-green font-bold tracking-widest uppercase text-xs lg:text-sm relative z-10 mb-1">Años de</span>
            <span className="text-gray-300 font-semibold text-xs lg:text-sm relative z-10">Trayectoria Impecable</span>
          </div>

          <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-[2rem] p-8 lg:p-10 border border-green-100/70 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="w-12 h-12 bg-pasamayo-green rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-green-900/10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-black text-pasamayo-blue mb-3 tracking-tight">Nuestra Misión</h3>
              <p className="text-gray-600 text-[0.85rem] leading-relaxed font-medium">
                Brindar un servicio de transporte terrestre seguro, cómodo y eficiente, superando siempre las expectativas de nuestros pasajeros mediante la mejora continua.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFFBEB] to-white rounded-[2rem] p-8 lg:p-10 border border-yellow-100/70 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="w-12 h-12 bg-pasamayo-yellow rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-yellow-900/10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-black text-pasamayo-blue mb-3 tracking-tight">Nuestra Visión</h3>
              <p className="text-gray-600 text-[0.85rem] leading-relaxed font-medium">
                Consolidarnos como la empresa referente y líder en transporte interprovincial, siendo reconocidos por nuestra innovación y excelencia en el servicio.
              </p>
            </div>
          </div>

          {/* ----- FILA 3: VALORES CORPORATIVOS (Ancho Completo - 3 cols) ----- */}
          <div className="md:col-span-3 bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-black text-pasamayo-blue tracking-tight leading-tight">
                Valores que <br className="hidden md:block"/><span className="text-pasamayo-red">nos Guían</span>
              </h3>
              <p className="text-gray-500 text-sm mt-3">Los pilares que sostienen cada kilómetro recorrido.</p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-red-50 hover:text-pasamayo-red transition-colors group cursor-default">
                <span className="block text-xl mb-1">🛡️</span>
                <span className="font-bold text-gray-700 text-[0.8rem] group-hover:text-pasamayo-red">Seguridad</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-green-50 hover:text-pasamayo-green transition-colors group cursor-default">
                <span className="block text-xl mb-1">⏱️</span>
                <span className="font-bold text-gray-700 text-[0.8rem] group-hover:text-pasamayo-green">Puntualidad</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-yellow-50 hover:text-pasamayo-yellow transition-colors group cursor-default">
                <span className="block text-xl mb-1">🤝</span>
                <span className="font-bold text-gray-700 text-[0.8rem] group-hover:text-pasamayo-yellow">Empatía</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:text-blue-500 transition-colors group cursor-default">
                <span className="block text-xl mb-1">⭐</span>
                <span className="font-bold text-gray-700 text-[0.8rem] group-hover:text-blue-500">Excelencia</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 3. SECCIÓN DE LLAMADO A LA ACCIÓN BANNER LIMPIO ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 mt-12">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-pasamayo-blue mb-1.5 tracking-tight">¿Listo para viajar con nosotros?</h3>
            <p className="text-gray-500 text-sm font-medium">Reserva tu boleto hoy y experimenta la diferencia Pasamayo Express.</p>
          </div>
          <button className="bg-pasamayo-red text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_4px_15px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_25px_rgba(227,30,36,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm whitespace-nowrap">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
            </svg>
            RESERVA TU VIAJE AHORA
          </button>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;