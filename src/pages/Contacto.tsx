import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'colectivo',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('¡Mensaje recibido! Nos comunicaremos contigo de inmediato.');
  };

  return (
    <div className="w-full bg-[#F4F6F9] font-sans pb-24 overflow-hidden">
      
      {/* ================= 1. BANNER SUPERIOR CORPORATIVO ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/80373451_833382690450739_2499308793154764800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4unArGb7HzMCfUu_cOTwPn_esdPOy4Qqf96x087LhCkEgUFFAVrgI4VMRNmFCBuDBp1mMpVpDSfnojwOmPubj&_nc_ohc=Irekhtj9gp8Q7kNvwFrQNks&_nc_oc=Adr3-fGBU4NpQhINoiq2-hrCOatmj_mDCmp3_Df6VLvDIQFQrcUlWZI8wUrcIqbQTUI&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=KoaH6VFUPShrdi2986O8ug&_nc_ss=7b2a8&oh=00_Af4nzGL7X1SuGry2VRvjd-KPVHsspn9cm7NzqooOoFYhnQ&oe=6A33457A')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>COMUNÍCATE CON NOSOTROS</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Contáct<span className="text-pasamayo-green">anos</span>
          </h1>
        </div>
      </section>

      {/* ================= 2. SECCIÓN PRINCIPAL SPLIT SCREEN ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Canales de Atención */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
              <span className="text-[0.65rem] font-black text-pasamayo-red tracking-widest uppercase block mb-6">Atención Inmediata</span>
              
              <div className="space-y-6">
                {/* Central de Reservas */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-pasamayo-blue rounded-2xl flex items-center justify-center text-xl border border-blue-100 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-pasamayo-blue uppercase tracking-tight mb-1">Central Telefónica</h4>
                    <p className="text-lg font-black text-pasamayo-blue hover:text-pasamayo-red transition-colors cursor-pointer">+51 999 888 777</p>
                    <span className="text-[0.7rem] font-medium text-gray-400">Llamadas directas para Taxi Colectivo</span>
                  </div>
                </div>

                {/* WhatsApp de Turismo */}
                <div className="flex items-start gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-green-50 text-pasamayo-green rounded-2xl flex items-center justify-center text-xl border border-green-100 flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-pasamayo-blue uppercase tracking-tight mb-1">WhatsApp Reservas VIP</h4>
                    <p className="text-lg font-black text-pasamayo-green hover:scale-102 transition-transform cursor-pointer">+51 999 666 555</p>
                    <span className="text-[0.7rem] font-medium text-gray-400">Cotizaciones inmediatas para Servicios Turísticos</span>
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div className="flex items-start gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-red-50 text-pasamayo-red rounded-2xl flex items-center justify-center text-xl border border-red-100 flex-shrink-0">
                    ✉
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-pasamayo-blue uppercase tracking-tight mb-1">Correo Electrónico</h4>
                    <p className="text-base font-bold text-gray-600 hover:text-pasamayo-blue transition-colors cursor-pointer">reservas@pasamayoexpress.com</p>
                    <span className="text-[0.7rem] font-medium text-gray-400">Consultas corporativas y convenios</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estación Única */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[0.65rem] font-black text-pasamayo-green tracking-widest uppercase block mb-4">Nuestra Estación</span>
              <div className="flex items-start gap-3">
                <span className="text-pasamayo-red text-base">🏢</span> 
                <div>
                  <strong className="block text-pasamayo-blue text-sm">Terminal Principal Huaral:</strong> 
                  <span className="text-xs font-semibold text-gray-500 block mt-1">Avenida Cahuas frente a ex Electra, Huaral</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario De Reservas */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pasamayo-blue/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <span className="text-[0.65rem] font-black text-pasamayo-green tracking-widest uppercase block mb-2">Reserva Web Express</span>
            <h3 className="text-2xl font-black text-pasamayo-blue tracking-tight mb-8">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-pasamayo-blue uppercase tracking-wider mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-pasamayo-blue focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-pasamayo-blue uppercase tracking-wider mb-2">Número de Teléfono</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="Ej. 999111222"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-pasamayo-blue focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-pasamayo-blue uppercase tracking-wider mb-2">Servicio que Solicita</label>
                <select 
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-pasamayo-blue focus:outline-none focus:border-pasamayo-blue focus:bg-white transition-all cursor-pointer"
                >
                  <option value="colectivo">Taxi Colectivo Ruta Troncal</option>
                  <option value="turismo">Servicio Turístico Especial Privado</option>
                  <option value="corporativo">Traslado Corporativo / Convenios</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-pasamayo-blue uppercase tracking-wider mb-2">Detalles del Viaje / Mensaje</label>
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Escribe la fecha, cantidad de pasajeros o detalles de tu paradero..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-pasamayo-blue focus:bg-white transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#050B14] hover:bg-pasamayo-red text-white font-black py-4 rounded-xl shadow-[0_5px_15px_rgba(5,11,20,0.2)] hover:shadow-[0_8px_25px_rgba(227,30,36,0.4)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-xs"
              >
                Enviar Solicitud de Reserva
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= 3. GOOGLE MAPS REAL CON MARCADOR EN HUARAL ================= */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 mt-16">
        <div className="bg-white rounded-[2rem] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden h-[450px] relative">
          
          {/* El iframe REAL con el marcador apuntando a Avenida Cahuas, Huaral */}
          <iframe 
            src="https://maps.google.com/maps?q=Av.+Cahuas,+Huaral,+Peru&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0 rounded-2xl"
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Terminal Principal Huaral - Pasamayo Express"
          ></iframe>
          
        </div>
      </section>

    </div>
  );
};

export default Contacto;