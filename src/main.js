import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(createPinia())
