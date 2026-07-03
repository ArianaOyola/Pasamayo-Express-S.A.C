
import { Link } from 'react-router-dom';

const Fleet = () => {
  const vehiculos = [
    {
      nombre: 'Minivan Ejecutiva',
      specs: [
        '10 Pasajeros + Conductor',
        'Marcas: Changan, DFSK, Shineray',
        'Asientos Ergonómicos',
        'Aire Acondicionado'
      ],
      img: 'https://inchcapelatam.sirv.com/Changan_pe/Grand-van-turismo/GRANDVANTURISMOBlanco.jpg'
    },
    {
      nombre: 'Minivan Express',
      specs: [
        '8 Pasajeros + Conductor',
        'Marcas: Changan, DFSK, Shineray',
        'Mayor espacio por pasajero',
        'Salidas más rápidas'
      ],
      img: 'https://derco-pe-prod.s3.amazonaws.com/medias/changan/migration/front-image/new-van/SC6406A-F2K_Blanco.jpg'
    }
  ];

  return (
    <section className="py-12 bg-pasamayo-blue font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Títulos más compactos */}
        <div className="text-center mb-8">
          <h2 className="text-pasamayo-red font-bold tracking-wider uppercase text-xs mb-1">
            NUESTRA FLOTA
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            Vehículos Modernos y Seguros
          </h3>
        </div>

        {/* Cuadrícula optimizada: Tarjetas HORIZONTALES */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vehiculos.map((vehiculo, index) => (
            <div key={index} className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-transparent transition-transform hover:-translate-y-1">
              
              {/* Imagen a la izquierda */}
              <div className="sm:w-2/5 h-48 sm:h-auto relative flex-shrink-0">
                <img 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src={vehiculo.img} 
                  alt={vehiculo.nombre} 
                />
              </div>
              
              {/* Contenido a la derecha */}
              <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-pasamayo-blue mb-3">
                    {vehiculo.nombre}
                  </h4>
                  
                  {/* Lista con los checks rojos */}
                  <ul className="space-y-1.5 mb-4 text-xs text-gray-600 font-medium">
                    {vehiculo.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-pasamayo-red font-bold mr-1.5">✓</span> 
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Botón rojo */}
                <div className="mt-2">
                  <Link 
                    to="/flota" 
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-xs font-bold rounded-lg text-white bg-pasamayo-red hover:bg-red-700 transition-colors uppercase tracking-wider"
                  >
                    Conoce Más
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fleet;