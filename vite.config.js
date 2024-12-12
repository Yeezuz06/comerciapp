import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Exporta la configuración para Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Permite usar '@' como alias para 'src'
    },
  },
  build: {
    rollupOptions: {
      external: [], // Agrega dependencias aquí si necesitas excluirlas del build
    },
  },
});
