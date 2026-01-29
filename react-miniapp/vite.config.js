import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
    // TODO(CORS lab): добавь proxy для '/api' на 'http://localhost:3001'
  }
});
