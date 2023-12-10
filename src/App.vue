<template>
  <!-- -->
  <div class="i_screen">
    <div class="bili-feed4">
      <!-- header -->
      <div class="bili-header">
        <!--header-bar -->
        <div class="bili-header__bar">
          <!--左侧-->
          <ul class="left-entry">
            <li class="v-popover-wrap">
              <a>
                <span>首页</span>
              </a>
            </li>
            <li class="v-popover-wrap">
              <a>
                <span>番剧</span>
              </a>
            </li>
            <li class="v-popover-wrap">
              <a>
                <span>直播</span>
              </a>
            </li>

            <li class='v-popover-wrap'>
              <a>
                <span>游戏中心</span>
              </a>
            </li>

            <li class='v-popover-wrap'>
              <a>
                <span>会员购</span>
              </a>
            </li>

            <li class='v-popover-wrap'>
              <a>
                <span>漫画</span>
              </a>
            </li>

            <li class='v-popover-wrap'>
              <a>
                <span>赛事</span>
              </a>
            </li>

            <li class='v-popover-wrap'>
              <a>
                <span>这一年</span>
              </a>
            </li>
          </ul>
          <!--中间-->
          <div class="center-search-container">center</div>
          <!--右侧-->
          <ul class="right-entry">
            right
          </ul>
        </div>
        <div class="bili-header__banner"></div>
      </div>
      <div class="header-channel" style="display: none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useWatchResize } from './utils/resize.ts'

/**
 * @description 挂载后监听一次，解决首屏不更新监听问题
 */
onMounted(() => {
  useWatchResize()
})
</script>

<style scoped lang="scss">
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

        .left-entry {
          display: flex;
          align-items: center;
          margin-right: 30px;
          flex-shrink: 0;

          .v-popover-wrap {
            position: relative;
            font-weight: 400;
            line-height: 1.25;
            font-style: normal;

          }
        }
      }
    }
  }
}
</style>
