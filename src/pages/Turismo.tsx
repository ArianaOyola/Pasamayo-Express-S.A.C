import React from 'react';

const Turismo = () => {
  // Catálogo completo de 12 destinos turísticos VIP
  const destinos = [
    { 
      title: 'Castillo de Chancay', 
      location: 'Chancay',
      desc: 'Majestuosa infraestructura de estilo medieval frente al mar, llena de historia, cultura y museos.', 
      img: 'https://elcomercio.pe/resizer/v2/63RRTZ5VYNEEBF364UQPNYJPH4.jpg?auth=a49908bf9fafd23922907634f6abf555e1e89919efcde3d62dc4e3a2392c2b3f&width=980&height=528&quality=75&smart=true', 
      tag: 'Histórico' 
    },
    { 
      title: 'Lomas de Rúpac', 
      location: 'Huaral',
      desc: 'Conocido como el "Machu Picchu Limeño". Un paraíso arqueológico literalmente sobre las nubes.', 
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/19/ee/e4/rupac.jpg?w=800&h=800&s=1', 
      tag: 'Trekking' 
    },
    { 
      title: 'Hacienda Huando', 
      location: 'Huaral',
      desc: 'Cuna de las famosas naranjas. Disfruta de su capilla histórica, cabalgatas y gastronomía campestre.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3iHfmh2m4CbeAr2o2Npko2akezlYVVp_Eg&s', 
      tag: 'Tradición' 
    },
    { 
      title: 'Lomas de Lachay', 
      location: 'Huacho / Chancay',
      desc: 'Reserva nacional y oasis de neblina. Un espectáculo de flora y fauna endémica ideal para el ecoturismo.', 
      img: 'https://mochileaperu.com/wp-content/uploads/2018/08/67662155_781674555581398_4103452172488267055_n.jpg', 
      tag: 'Naturaleza' 
    },
    { 
      title: 'Albufera Medio Mundo', 
      location: 'Huacho',
      desc: 'Hermosa laguna costera de aguas tranquilas, perfecta para paseos en bote y avistamiento de aves.', 
      img: 'https://cdn.www.gob.pe/uploads/document/file/1709553/standard_NP-168-21-W01.jpg.jpg', 
      tag: 'Relax' 
    },
    { 
      title: 'Eco Truly Park', 
      location: 'Chancay',
      desc: 'Fascinante comunidad ecológica y artística frente al océano, famosa por sus construcciones cónicas.', 
      img: 'https://mfes.b37m.ru/actualidad/public_images/2021.06/article/60d0d601e9ff712edc2c9b64.JPG', 
      tag: 'Cultura' 
    },
    { 
      title: 'Baños Termales Collpa', 
      location: 'Huaral',
      desc: 'Relájate en sus aguas termo-medicinales rodeadas de un impresionante paisaje cordillerano.', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkhj4VS7SO5Y0i2CmoyDU3PCTs6rXP_NOew&s', 
      tag: 'Salud' 
    },
    { 
      title: 'Malecón y Playas', 
      location: 'Huacho',
      desc: 'Disfruta de la brisa marina, los atardeceres en el malecón Roca y los deliciosos ceviches huachanos.', 
      img: 'https://statics.guiaturista.com.pe/2025/07/68822e388cd36.jpeg', 
      tag: 'Verano' 
    },
    { 
      title: 'Sitio Arq. Vichama', 
      location: 'Huacho',
      desc: 'Explora la antigua ciudad agropesquera de la civilización Caral y sus impresionantes frisos.', 
      img: 'https://cdn.www.gob.pe/uploads/document/file/346927/standard_Sitio_Arqueol%C3%B3gico_Vichama_conmemora_9_a%C3%B1os_de_puesta_en_valor20190725-6152-hqzsqi.jpg', 
      tag: 'Arqueología' 
    },
    { 
      title: 'Plaza y Glorieta', 
      location: 'Chancay',
      desc: 'Pasea por el centro histórico y tómate fotos en la icónica glorieta colonial de la plaza de armas.', 
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7F-Dj1kb5QFLVPiNMNxPwU4hi5aL7oHmbbp_NXwHm-MayB7GYA1G_NS5P88NhjsESXRb1jABAoEWfJspgOAR0dAh8dx4DCvjyapd_S7RGtHXZD-y-tHJBhL_r_JtG1ejitqHCsapzk_k/w1200-h630-p-k-no-nu/plaza-chancay.jpg', 
      tag: 'Ciudad' 
    },
    { 
      title: 'Pueblo de Pampas', 
      location: 'Huaral',
      desc: 'Conocido como el "Pueblo Fantasma", es el punto de partida perfecto para aventureros e historiadores.', 
      img: 'https://larepublica.cronosmedia.glr.pe/original/2024/09/04/66d89341ec309a66222ed5ea.jpg', 
      tag: 'Aventura' 
    },
    { 
      title: 'Lima Metropolitana', 
      location: 'Lima',
      desc: 'Conexiones ejecutivas y turísticas directas a la capital, ya sea al aeropuerto, hoteles o centro histórico.', 
      img: 'https://blog.experiencias.com.pe/wp-content/uploads/2022/12/lima2-1024x576.jpg', 
      tag: 'Especial' 
    }
  ];

  return (
    <div className="w-full bg-[#F4F6F9] font-sans pb-24 overflow-hidden">
      
      {/* ================= 1. BANNER SUPERIOR ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.bbva.com/wp-content/uploads/2020/12/turismo_sostenible.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>EXPERIENCIAS EXCLUSIVAS</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Catálogo <span className="text-pasamayo-green">Turístico</span>
          </h1>
        </div>
      </section>

      {/* ================= 2. DESCRIPCIÓN EDITORIAL ================= */}
      <section className="text-center max-w-3xl mx-auto mt-16 mb-12 px-4">
         <h2 className="text-3xl font-black text-pasamayo-blue tracking-tight mb-4 uppercase">Descubre el Norte Chico</h2>
         <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
           Ponemos a tu disposición nuestras unidades más modernas para traslados privados y paseos grupales. Explora la riqueza histórica, natural y gastronómica de nuestra región viajando a tu propio ritmo. <br/> <strong className="text-pasamayo-red mt-2 inline-block">* Todos los circuitos turísticos requieren reservación previa.</strong>
         </p>
      </section>

      {/* ================= 3. GALERÍA BOUTIQUE (12 DESTINOS) ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {destinos.map((destino, i) => (
          <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-lg h-[400px] cursor-pointer border border-gray-100">
            {/* Imagen de Fondo */}
            <img 
              src={destino.img} 
              alt={destino.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            {/* Overlay Oscuro para lectura */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
            
            {/* Contenido de la Postal */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              
              {/* Etiqueta Superior */}
              <div className="flex justify-between items-start">
                <span className="bg-[#050B14]/60 backdrop-blur-md text-gray-300 font-bold px-3 py-1.5 rounded-lg text-[0.65rem] uppercase tracking-widest border border-gray-600 flex items-center gap-1.5 shadow-md">
                  <span className="text-pasamayo-red">📍</span> {destino.location}
                </span>
                <span className="bg-pasamayo-green/90 backdrop-blur-md text-white font-bold px-3 py-1 rounded-full text-[0.6rem] uppercase tracking-wider shadow-lg">
                  {destino.tag}
                </span>
              </div>
              
              {/* Textos Inferiores (Animados) */}
              <div>
                <h4 className="text-2xl font-black text-white tracking-tight leading-tight mb-2 group-hover:text-pasamayo-yellow transition-colors duration-300">
                  {destino.title}
                </h4>
                <p className="text-gray-300 text-[0.85rem] font-medium leading-relaxed opacity-90">
                  {destino.desc}
                </p>
                
                {/* Botón Oculto que sube al hacer hover */}
                <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-300 mt-4">
                  <button className="text-[0.7rem] font-bold text-pasamayo-blue flex items-center justify-center gap-2 uppercase tracking-widest bg-white px-5 py-2.5 rounded-full w-full hover:bg-pasamayo-yellow hover:text-white transition-colors shadow-lg">
                    Cotizar Transporte <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* ================= 4. BANNER INFERIOR DE ACCIÓN ================= */}
      <section className="max-w-[1000px] mx-auto px-4 lg:px-8 mt-20">
        <div className="bg-pasamayo-blue rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,40,85,0.2)] border border-gray-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          
          <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight relative z-10 uppercase">
            ¿Tienes otro destino en mente?
          </h3>
          <p className="text-white/70 text-sm md:text-base font-medium max-w-xl mx-auto mb-8 relative z-10">
            Nuestra flota está preparada para llevarte a cualquier punto turístico del país. Cuéntanos tu plan y nosotros ponemos la movilidad VIP.
          </p>
          
          <button className="relative z-10 bg-pasamayo-red text-white font-bold text-sm px-10 py-4 rounded-full shadow-[0_5px_15px_rgba(227,30,36,0.3)] hover:bg-red-700 hover:shadow-[0_8px_25px_rgba(227,30,36,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap uppercase tracking-widest mx-auto">
            Contactar Asesor
          </button>
        </div>
      </section>

    </div>
  );
};

export default Turismo;