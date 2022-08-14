import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/app/ui/index.vue';
import router from './router';

import '../shared/assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
