import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router/index'

import './css/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)
app.use(router)
app.mount('#app')

