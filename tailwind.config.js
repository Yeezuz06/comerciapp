module.exports = {
  content: [
    "./index.html", // Archivo principal
    "./src/**/*.{js,jsx,ts,tsx}", // Todos los archivos en `src`
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados para ComerciApp
        primary: "#007bff", // Azul principal
        secondary: "#28a745", // Verde para botones secundarios
        accent: "#ffc107", // Amarillo para detalles
        dark: "#343a40", // Tonos oscuros para texto o fondos
        light: "#f8f9fa", // Tonos claros
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Tipografía principal
        heading: ["Poppins", "sans-serif"], // Tipografía para encabezados
      },
    },
  },
  plugins: [],
};
