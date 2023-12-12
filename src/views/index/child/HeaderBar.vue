<script setup lang="ts">
import { res } from './headerListData';
</script>

<template>
  <div class="bili-header__bar">
    <!--左侧-->
    <ul class="left-entry">
      <hp-popover
        v-for="(item, index) in res"
        :button-name="item.buttonName"
        :key="index"
      >
        <template #left v-if="item.leftIcon">
          <i
            class="mr-2 text-2xl iconfont text-[rgb(0,174,236)]"
            :class="item.leftIcon"
          ></i>
        </template>

        <template #right v-if="item.rightIcon">
          <i
            class="mr-2 text-2xl iconfont text-[rgb(0,174,236)]"
            :class="item.rightIcon"
          ></i>
        </template>
      </hp-popover>
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
</template>

<style scoped lang="scss">
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
</style>
