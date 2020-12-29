import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "initialize-css/dist/initialize.css";
import "typeface-roboto";

createApp(App)
.use(store)
.use(router)
.mount('#app')
