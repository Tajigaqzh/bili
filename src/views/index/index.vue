<script lang="ts" setup>
import { onMounted } from 'vue'
import { useWatchResize } from '@/utils/resize.ts';
import HeaderBar from '@/views/index/child/HeaderBar.vue'
/**
 * @description 挂载后监听一次，解决首屏不更新监听问题
 */
onMounted(() => {
  useWatchResize();
});

</script>

<template>
  <div class="i_screen">
    <div class="bili-feed4">
      <!-- header -->
      <div class="bili-header">
        <HeaderBar/>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.i_screen {
  background-color: var(--bg1);

  .bili-feed4 {
    position: relative;

    .bili-header {
      position: relative;
      width: 100%;
      max-width: 2560px;
      min-height: 64px;
      margin: 0 auto;
      color: var(--text1);
    }
  }
}
</style>
