import { type App, createApp } from 'vue';
import AppVue from './App.vue';

import '@/assets/styles/index.scss';
import '@/assets/styles/mode/dark.scss';

const app: App<Element> = createApp(AppVue);

app.mount('#app');
