import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,        // shorthand for 0.0.0.0
    port: 8070,        // (optional) ensure it stays at 5173
    strictPort: true,  // (optional) fail if 5173 is in use
    // If you need hot-reload to work on other devices:
    hmr: {
     // host: '192.168.178.50',  // e.g. '192.168.1.42'
     host: '77.22.17.208',  // e.g. '192.168.1.42'
    },
  },
})
