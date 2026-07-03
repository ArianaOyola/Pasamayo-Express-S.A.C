import React, { useState } from 'react';

const Reserva = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    tipoServicio: 'colectivo',
    origen: 'Santa Rosa',
    destino: 'Cahuas',
    paraderoIntermedio: '',
    fecha: '',
    hora: '',
    pasajeros: '1',
    nombre: '',
    telefono: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reserva completada:', bookingData);
    // Aquí se conectará con EmailJS de forma automatizada
    setStep(3);
  };

  return (
    <div className="w-full bg-[#F4F6F9] font-sans pb-24 overflow-hidden">
      
      {/* ================= 1. BANNER SUPERIOR CORPORATIVO (PATRÓN UNIFICADO) ================= */}
      <section className="relative h-[38vh] min-h-[320px] flex items-center justify-center px-4 mt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1755866928148-592aeb339d31?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pasamayo-blue/90 to-pasamayo-blue/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-8">
          <div className="flex items-center gap-3 text-pasamayo-red text-sm font-bold tracking-widest mb-4">
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
            <span>GESTIONA TU ASIENTO EN VIVO</span>
            <div className="w-12 h-0.5 bg-pasamayo-red"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Reserva tu <span className="text-pasamayo-green">Viaje</span>
          </h1>
        </div>
      </section>

      {/* ================= 2. CONTENEDOR DEL ASISTENTE (STEPPER CARD) ================= */}
      <section className="max-w-[750px] mx-auto px-4 mt-16">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pasamayo-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Indicador visual de pasos */}
          <div className="flex items-center justify-center gap-4 mb-10 border-b border-gray-100 pb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step >= 1 ? 'bg-pasamayo-blue text-white' : 'bg-gray-100 text-gray-400'}`}>1</div>
            <div className={`h-0.5 w-12 bg-gray-200 ${step >= 2 && 'bg-pasamayo-blue'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step >= 2 ? 'bg-pasamayo-blue text-white' : 'bg-gray-100 text-gray-400'}`}>2</div>
            <div className={`h-0.5 w-12 bg-gray-200 ${step === 3 && 'bg-pasamayo-blue'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step === 3 ? 'bg-pasamayo-green text-white' : 'bg-gray-100 text-gray-400'}`}>✓</div>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* ================= PASO 1: SELECCIÓN DE SERVICIO ================= */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-pasamayo-blue uppercase tracking-tight">Paso 1: Elige el Tipo de Viaje</h3>
                  <p className="text-gray-400 text-xs font-semibold mt-1">Selecciona la modalidad de minivan que necesitas</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tarjeta Colectivo */}
                  <label className={`border-2 rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all ${bookingData.tipoServicio === 'colectivo' ? 'border-pasamayo-blue bg-blue-50/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="tipoServicio" value="colectivo" checked={bookingData.tipoServicio === 'colectivo'} onChange={handleChange} className="sr-only" />
                    <div>
                      <span className="text-lg mb-2 block">🚖</span>
                      <h4 className="font-black text-pasamayo-blue text-sm uppercase">Taxi Colectivo Diario</h4>
                      <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">Ruta establecida Santa Rosa - Cahuas. Salidas continuas en minivans de 8 y 10 pasajeros.</p>
                    </div>
                  </label>

                  {/* Tarjeta Especial / Turismo */}
                  <label className={`border-2 rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all ${bookingData.tipoServicio === 'turismo' ? 'border-pasamayo-yellow bg-yellow-50/20 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="tipoServicio" value="turismo" checked={bookingData.tipoServicio === 'turismo'} onChange={handleChange} className="sr-only" />
                    <div>
                      <span className="text-lg mb-2 block">✨</span>
                      <h4 className="font-black text-pasamayo-blue text-sm uppercase">Servicio Turístico / Privado</h4>
                      <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">Alquiler completo de minivan con conductor para circuitos turísticos, paseos o contratos privados.</p>
                    </div>
                  </label>
                </div>

                <button type="button" onClick={handleNext} className="w-full bg-[#050B14] hover:bg-pasamayo-blue text-white font-black py-3.5 rounded-xl uppercase tracking-widest text-xs transition-colors mt-4">
                  Continuar a Detalles ⟶
                </button>
              </div>
            )}

            {/* ================= PASO 2: FORMULARIO DE ITINERARIO Y CONTACTO ================= */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-pasamayo-blue uppercase tracking-tight">Paso 2: Itinerario y Datos</h3>
                  <p className="text-gray-400 text-xs font-semibold mt-1">Completa los campos para coordinar tu salida</p>
                </div>

                {bookingData.tipoServicio === 'colectivo' ? (
                  /* Campos específicos para Colectivo */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">¿Dónde abordas?</label>
                      <select name="origen" value={bookingData.origen} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold text-pasamayo-blue">
                        <option value="Santa Rosa">Terminal Inicial: Santa Rosa</option>
                        <option value="Colegio Pasamayo">Paradero Colegio Pasamayo</option>
                        <option value="Boza">Estación Central Boza</option>
                        <option value="Otro">Otro paradero intermedio</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">¿Cuál es tu destino?</label>
                      <select name="destino" value={bookingData.destino} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold text-pasamayo-blue">
                        <option value="Cahuas">Terminal Final: Cahuas (Huaral)</option>
                        <option value="Boza">Estación Central Boza</option>
                        <option value="Colegio Pasamayo">Paradero Colegio Pasamayo</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  /* Campo abierto para ruta Turística */
                  <div>
                    <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">Especifica el Destino Turístico o Detalles del Contrato</label>
                    <input type="text" name="paraderoIntermedio" value={bookingData.paraderoIntermedio} onChange={handleChange} required placeholder="Ej. Castillo de Chancay / Lomas de Rúpac" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-pasamayo-blue focus:bg-white transition-all" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">Fecha de Viaje</label>
                    <input type="date" name="fecha" value={bookingData.fecha} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">Hora Aproximada</label>
                    <input type="time" name="hora" value={bookingData.hora} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">Nº Pasajeros / Asientos</label>
                    <select name="pasajeros" value={bookingData.pasajeros} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold text-pasamayo-blue">
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} Asiento(s)</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-5">
                  <div>
                    <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">Tu Nombre</label>
                    <input type="text" name="nombre" value={bookingData.nombre} onChange={handleChange} required placeholder="Nombre completo" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-pasamayo-blue uppercase mb-2">Número Telefónico</label>
                    <input type="tel" name="telefono" value={bookingData.telefono} onChange={handleChange} required placeholder="Celular de contacto" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none" />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button type="button" onClick={handleBack} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3.5 rounded-xl uppercase tracking-widest text-xs transition-colors">
                    ⟵ Atrás
                  </button>
                  <button type="submit" className="flex-1 bg-pasamayo-red text-white font-black py-3.5 rounded-xl uppercase tracking-widest text-xs shadow-[0_5px_15px_rgba(227,30,36,0.2)] hover:bg-red-700 transition-all">
                    Confirmar Reserva ✔
                  </button>
                </div>
              </div>
            )}

            {/* ================= PASO 3: ÉXITO / CONFIRMACIÓN ================= */}
            {step === 3 && (
              <div className="text-center space-y-6 py-4 animate-fadeIn">
                <div className="w-16 h-16 bg-green-50 text-pasamayo-green border border-green-100 rounded-full flex items-center justify-center text-3xl mx-auto shadow-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-2xl font-black text-pasamayo-blue tracking-tight uppercase">¡Solicitud Procesada!</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-md mx-auto mt-2">
                    Hola <strong>{bookingData.nombre}</strong>, tu solicitud para el servicio de <strong>{bookingData.tipoServicio === 'colectivo' ? 'Taxi Colectivo' : 'Turismo Privado'}</strong> ha sido enviada con éxito.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-left text-xs max-w-sm mx-auto space-y-2 font-medium text-gray-600">
                  <div>• <strong>Fecha/Hora:</strong> {bookingData.fecha} - {bookingData.hora}</div>
                  <div>• <strong>Asientos:</strong> {bookingData.pasajeros} Pasajero(s)</div>
                  <div>• <strong>Ruta/Detalle:</strong> {bookingData.tipoServicio === 'colectivo' ? `${bookingData.origen} ⟶ ${bookingData.destino}` : bookingData.paraderoIntermedio}</div>
                </div>

                <p className="text-xs font-bold text-pasamayo-red animate-pulse">
                  * Un asesor se comunicará a tu celular (+51 {bookingData.telefono}) en menos de 5 minutos para asignarte tu minivan.
                </p>

                <button type="button" onClick={() => { setStep(1); setBookingData({...bookingData, nombre: '', telefono: '', fecha: '', hora: ''}) }} className="bg-pasamayo-blue text-white font-black px-6 py-3 rounded-xl text-xs tracking-widest uppercase hover:bg-opacity-90 transition-all">
                  Realizar otra Reserva
                </button>
              </div>
            )}

          </form>
        </div>
      </section>

    </div>
  );
};

export default Reserva;