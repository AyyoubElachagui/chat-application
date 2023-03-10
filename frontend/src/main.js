import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
// import VueTimeago from 'vue-timeago';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import './index.css'

createApp(App)
.use(router)
.use(store)
// .use(VueTimeago)
.use(Toast, {
    shareAppContext: true,
})
.mount('#app')
