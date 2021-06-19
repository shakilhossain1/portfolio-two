import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import VueCarousel from 'vue-carousel';

const app = createApp(App);

app.use(VueCarousel);

app.mount('#app');
