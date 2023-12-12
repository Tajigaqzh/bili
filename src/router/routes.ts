import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/video',
    component: () => import('@/views/video/index.vue'),
    meta: {
      title: '视频',
    },
  },
];
