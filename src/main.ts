import { type App, createApp } from 'vue';
import AppVue from './App.vue';

import '@/assets/styles/index.scss';
//虽然使用了自动导入，但是tailwindcss的样式会覆盖element-plus的样式，
// 因此需要单独引入element-plus的样式
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import globalComponent from './components/index.ts';

import router from '@/router/index';

const app: App<Element> = createApp(AppVue);

app.use(globalComponent);
app.use(router);

app.mount('#app');
