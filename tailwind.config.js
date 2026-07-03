/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pasamayo-blue': '#0B172A',   // Azul marino oscuro para cabecera, pie y tarjetas
        'pasamayo-red': '#E31E24',    // Rojo vibrante para botones de reserva
        'pasamayo-green': '#188351',  // Verde para textos destacados y WhatsApp
        'pasamayo-yellow': '#F39C12', // Amarillo/Naranja para el botón de Tours
        'pasamayo-light': '#F8F9FA',  // Gris súper claro para el fondo de la web
      }
    },
  },
  plugins: [],
}