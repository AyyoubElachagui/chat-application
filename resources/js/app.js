import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App)
.use(router)
.use(store)
.use(Toast, {
    shareAppContext: true,
})
.mount('#app')

