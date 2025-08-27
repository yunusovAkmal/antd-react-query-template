import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  server: {
    port: 2124,
    hmr: true,
    open: true
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },

  envPrefix: 'APP_'
})
