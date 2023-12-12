import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import path from 'path'

// https://vitejs.dev/config/
/**
 * @description: vite.config.ts
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './types'),
    },
  },

  plugins: [
    vue(),
    /**
     * @see https://element-plus.org/en-US/guide/quickstart.html#on-demand-importhttps://element-plus.org/en-US/guide/quickstart.html#on-demand-import
     */
    AutoImport({
      resolvers: [ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
