import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,       
    strictPort: true, 
    allowedHosts: [
      'livevpd.pixeltronic.dev'
    ],
    hmr: {
     // host: '192.168.178.50'
     //host: '77.22.17.208',  // a71ae132-bd80-4423-940b-f88778061534
     protocol: 'wss',
     host: 'livevpd.pixeltronic.dev',
     clientPort: 443 
    },
  },
})
