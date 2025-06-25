import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@splidejs/vue-splide/css';
import router from './router';
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


const app = createApp(App);
app.use(router);
app.mount('#app');
