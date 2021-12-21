import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue2-animate/dist/vue2-animate.min.css';


createApp(App).use(router).mount('#app')
