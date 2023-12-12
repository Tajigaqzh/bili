<template>
  <div class="i_screen">
    <div class="bili-feed4">
      <!-- header -->
      <div class="bili-header">
        <!--header-bar -->
        <div class="bili-header__bar">
          <!--左侧-->
          <!--          hover:direction-reverse-->
          <ul class="left-entry">
            <hp-popover button-name="首页">
              <template #left>
                <i
                  class="mr-2 text-2xl iconfont icon-icon_bilibili text-[rgb(0,174,236)]"
                ></i>
              </template>
            </hp-popover>
            <hp-popover popup-title="热门番剧" button-name="番剧" />
            <hp-popover button-name="游戏中心" />
            <hp-popover button-name="会员购" />
            <hp-popover button-name="漫画" />
            <hp-popover button-name="赛事" />
            <hp-popover button-name="下载客户端">
              <template #left>
                <i class="iconfont icon-xiazai text-lg mr-1.5"></i>
              </template>
            </hp-popover>
          </ul>

          <!--中间-->
          <div class="center-search-container">
            <div class="center-search__bar is-focus"></div>
          </div>
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

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useWatchResize } from '@/utils/resize.ts';

/**
 * @description 挂载后监听一次，解决首屏不更新监听问题
 */
onMounted(() => {
  useWatchResize();
});
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
          margin-right: 10px;
          flex-shrink: 0;
          height: 100%;
          line-height: 17.5px;
          font-size: 14px;

          .v-popover-wrap {
            position: relative;
            font-weight: 400;
            line-height: 1.25;
            font-style: normal;
            font-family: inherit;
            font-size: 100%;

            color: #fff;

            a {
              height: 64px;
              line-height: 64px;
              font-size: 14px;
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-right: 10px;
              text-decoration: none;
              background-color: transparent;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
