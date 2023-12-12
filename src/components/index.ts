import { App } from 'vue';

import * as components from './components';
const install = (app: App) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;
