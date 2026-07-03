

const Servicios = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans pb-24 overflow-hidden">
      
      {/* ================= 1. BANNER SUPERIOR CORPORATIVO (UNIFICADO) ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://transportesvicente.com/img/Nuestros-Servicios/Transporte-de-personal/Servicio-de-Personal-en-Transportes-Vicente.01.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>NUESTROS SERVICIOS</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Qué <span className="text-pasamayo-green">Ofrecemos</span>
          </h1>
        </div>
      </section>

      {/* ================= 2. EXCLUSIVO SHOWCASE EN ZIG-ZAG ================= */}
      <section className="max-w-[1200px] mx-auto px-4 lg:px-8 mt-[4rem] space-y-24 lg:space-y-32">
        
        {/* SERVICIO 1: TAXI COLECTIVO (Rutas Exactas) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
          {/* Luz de fondo sutil */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-pasamayo-green/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
          
          {/* Columna Imagen Real con Etiquetas Flotantes */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/472681277_907132278068110_7382195119501803368_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGY1FPt0p_lhT19VWW5KpnJVPDKCL7fNENU8MoIvt80Q3JiKb8fBaKjPTvsf4ztrLR4AWmcMDw2SIcznPllmuSG&_nc_ohc=okas_xx7cdoQ7kNvwHGPsow&_nc_oc=AdqNxyxCr8QO3JqZSf5-N2lUSU3PG0ncObG-36mPu61Z6j8TRvyGvrIK450uqIJsojo&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=BBnrLpHXEfnHk8XmsfrEqQ&_nc_ss=7b2a8&oh=00_Af5bF5Yt-gAoxMN2rhaIbZNrYmsRZm4D7loTZmqhn21F2w&oe=6A11AC01" 
                alt="Taxi Colectivo Pasamayo Express" 
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pasamayo-blue/70 via-transparent to-transparent"></div>
            </div>
            
            {/* Etiqueta Flotante Animada */}
            <div className="absolute -left-4 top-10 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center text-lg">⏱️</div>
              <div>
                <span className="block text-[0.65rem] font-bold text-gray-400 uppercase">Frecuencia</span>
                <span className="block text-xs font-black text-pasamayo-blue">Salidas Continuas</span>
              </div>
            </div>
          </div>

          {/* Columna Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-5 border border-green-100 shadow-sm">
               <svg className="w-6 h-6 text-pasamayo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
            </div>
            <h2 className="text-3xl font-black text-pasamayo-blue mb-4 tracking-tight uppercase">
              Taxi Colectivo
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-medium text-[0.9rem] lg:text-[0.95rem]">
              Ofrecemos el servicio de taxi colectivo más rápido, confiable y seguro de la región. Conectamos de manera directa y eficiente los puntos clave de nuestra ruta autorizada, garantizando confort en cada tramo del camino.
            </p>
            
            {/* Caja de Rutas Oficiales */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-6">
              <span className="text-[0.65rem] font-black text-pasamayo-red tracking-widest uppercase block mb-3">Nuestra Ruta Oficial:</span>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-pasamayo-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-sm">HUARAL</span>
                <span className="text-pasamayo-green font-bold text-lg">⇄</span>
                <span className="bg-pasamayo-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-sm">BOZA</span>
                <span className="text-pasamayo-green font-bold text-lg">⇄</span>
                <span className="bg-pasamayo-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-sm">PASAMAYO</span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICIO 2: TURISMO (Destinos Exactos y Reservación) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 relative">
          {/* Luz de fondo sutil */}
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-pasamayo-yellow/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
          
          {/* Columna Imagen */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/67564238_722508194871523_765916591568191488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG39NdtLvI9XBLj12GTLkmMAzDBauPJMnQDMMFq48kydPEU9eE7mJPMhcxtVn3Tw3VQaZ-X16ZlVthJG2WCg2Dg&_nc_ohc=nkS-KKxjtYEQ7kNvwGaZ3Yz&_nc_oc=AdoSNQDsxssikVCzmIyrPfDFPhx7JV5BN1CXAMjcQD7ijuLusyULU1JXsJWlDmoIQPA&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=_Ic5yM1qQugoOnSZXeJwAQ&_nc_ss=7b2a8&oh=00_Af7hrAD3rwSeD0J9KCGR2SZkgII45gqoC_HZ8l_b9iSbkg&oe=6A3335DA" 
                alt="Servicios Turísticos Pasamayo Express" 
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pasamayo-blue/70 via-transparent to-transparent"></div>
            </div>
            
            {/* Etiqueta Flotante */}
            <div className="absolute -right-4 bottom-10 bg-pasamayo-blue px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-700">
              <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-lg">🗓️</div>
              <div>
                <span className="block text-[0.65rem] font-bold text-gray-400 uppercase">Modalidad</span>
                <span className="block text-xs font-black text-white">Previa Reservación</span>
              </div>
            </div>
          </div>

          {/* Columna Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center mb-5 border border-yellow-100 shadow-sm">
               <svg className="w-6 h-6 text-pasamayo-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path></svg>
            </div>
            <h2 className="text-3xl font-black text-pasamayo-blue mb-4 tracking-tight uppercase">
              Servicios Turísticos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 font-medium text-[0.9rem] lg:text-[0.95rem]">
              Te llevamos a descubrir los mejores atractivos turísticos con total comodidad. Ponemos a tu disposición unidades modernas ideales para traslados privados, paseos y excursiones con la seguridad que nos caracteriza.
            </p>
            <p className="text-pasamayo-red font-bold text-xs uppercase tracking-wider mb-6 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pasamayo-red animate-pulse"></span>
              * Sujeto a previa reservación y disponibilidad de flota.
            </p>

            {/* Caja de Destinos Oficiales */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <span className="text-[0.65rem] font-black text-pasamayo-green tracking-widest uppercase block mb-3">Destinos Principales:</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-700">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100"><span className="text-pasamayo-green">✔</span> HUARAL</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100"><span className="text-pasamayo-green">✔</span> CHANCAY</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100"><span className="text-pasamayo-green">✔</span> HUACHO</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100"><span className="text-pasamayo-green">✔</span> LIMA METROPOLITANA</div>
              </div>
              <span className="block text-[0.65rem] text-gray-400 font-medium mt-3 text-center tracking-wide">¡Y otros destinos turísticos a solicitud del cliente!</span>
            </div>
          </div>
        </div>

      </section>

      {/* ================= 3. BANNER DE LLAMADO A LA ACCIÓN ================= */}
      <section className="mt-28 bg-pasamayo-blue py-16 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/2 h-full bg-pasamayo-red/10 blur-[120px] pointer-events-none"></div>
         <div className="max-w-[750px] mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase">¿Planeas tu próximo viaje?</h2>
            <p className="text-gray-300 mb-8 font-medium text-sm md:text-base">Separa tu colectivo diario o cotiza tu unidad de turismo privada de forma inmediata con nuestros asesores.</p>
            <button className="bg-pasamayo-red text-white font-black px-8 py-3.5 rounded-xl shadow-[0_0_15px_rgba(227,30,36,0.3)] hover:shadow-[0_0_35px_rgba(227,30,36,0.5)] hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wider flex items-center gap-2 mx-auto">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
              </svg>
              RESERVAR / COTIZAR SERVICIO
            </button>
         </div>
      </section>

    </div>
  );
};

export default Servicios;