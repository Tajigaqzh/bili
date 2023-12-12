/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    /**
     * @see https://www.npmjs.com/package/tailwindcss-animate
     * @description 用于设置元素的动画
     */
    require('tailwindcss-animate'),
    /**
     * @see https://www.npmjs.com/package/@tailwindcss/aspect-ratio
     * @description 用于设置元素的宽高比
     */
    require('@tailwindcss/aspect-ratio'),
  ],
};
