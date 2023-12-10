<template>
<!-- -->
  <div class='i_screen'>
    <div class='bili-feed4'>
      <!-- header -->
      <div class='bili-header'>
        <!--header-bar -->
        <div class='bili-header__bar'>
          <ul class='left-entry'>
            <li class='v-popover-wrap'>
              <a>
                <span>首页</span>
              </a>
            </li>
            <li class='v-popover-wrap'>
              <a>
                <span>番剧</span>
              </a>
            </li>
            <li class='v-popover-wrap'>
              <a>
                <span>直播</span>
              </a>
            </li>
          </ul>
          <div class='center-search-container'>
            center
          </div>
          <ul class='right-entry'>
            right

          </ul>

        </div>
        <div class='bili-header__banner'></div>
      </div>
      <div class='header-channel' style='display: none'>


      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import { useWatchResize } from './utils/resize.ts';

/**
 * @description 挂载后监听一次，解决首屏不更新问题
 */
onMounted(()=>{
  useWatchResize();
})
</script>

<style scoped lang='scss'>
.i_screen {
  background-color: var(--bg1);

  .bili-feed4 {
    position: relative;

    .bili-header {
      min-height: 64px;
      position: relative;
      margin: 0 auto;
      max-width: 2560px;
      width: 100%;

      color: var(--text1);

      .bili-header__bar {
        position: absolute;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        width: 100%;
        height: 64px;
      }
    }


  }
}
</style>
