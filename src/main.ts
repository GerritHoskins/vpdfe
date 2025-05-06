import { createApp } from 'vue'
import App from './App.vue'
import './style.css'       // ← Tailwind base styles
import router from './router'
//import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  //.use(createPinia())
  .mount('#app')
