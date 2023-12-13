<script setup lang="ts">
import { HeaderList, res }

 from './headerListData'
import { computed, ref }

 from 'vue'
import { Search } from '@element-plus/icons-vue'

const comPopTitle = computed(() => (item: HeaderList) => {
  return item.popups ? item.popups[0].popupTitle : ''
})

const search = ref<string>()
const historySearch = ref<string>('唠点历史')
const errorHandler = () => true

</script>

<template>
  <div class="bili-header__bar">
    <!--左侧-->
    <ul class="left-entry">
      <hp-popover
        v-for="(item, index) in res"
        :button-name="item.buttonName"
        :key="index"
        :popup-title='comPopTitle(item)'
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
    </ul>

    <!--中间-->
    <div class='center-search-container mr-3'>
      <el-input v-model='search' :placeholder='historySearch' :suffix-icon='Search' />
    </div>

    <div class='bar_right'>
      <el-avatar :size='40' src='https://empty' @error='errorHandler' class=''>
        <img
          src='https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
        />
      </el-avatar>
      <ul class='ul_list'>
        <li >
          <i class='iconfont icon-jinbi2 text-lg'></i>
          <span class='xl:inline sm:hidden'>大会员</span>
        </li>
        <li>
          <i class='iconfont icon-xiaoxi text-lg'></i>
          <span class='xl:inline sm:hidden'>消息</span>
        </li>
        <li>
          <i class='iconfont icon-fengche1 text-lg'></i>
          <span class='xl:inline sm:hidden'>动态</span>
        </li>
        <li>
          <i class='iconfont icon-shoucang-xianxing text-lg'></i>
          <span class='xl:inline sm:hidden'>收藏</span>
        </li>

        <li>
          <i class='iconfont icon-lishi text-lg'></i>
          <span class='xl:inline sm:hidden'>历史</span>
        </li>

        <li>
          <i class='iconfont icon-chuangyizhan text-lg'></i>
          <span class='xl:inline sm:hidden'>创作中心</span>
        </li>
      </ul>
    </div>
    <!--右侧-->

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
  height: 64px;
  padding: 0 24px;
  background-color: var(--bg1);


  .left-entry {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    height: 100%;
    margin-right: 10px;
    font-size: 14px;
    background-color: #00a3ff;


    .v-popover-wrap {
      position: relative;
      font-family: inherit;
      font-size: 100%;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25;
      color: #fff;

      a {
        display: flex;
        align-items: center;
        height: 64px;
        padding-right: 10px;
        margin-right: 10px;
        font-size: 14px;
        line-height: 64px;
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
      }
    }
  }

  .center-search-container {
    display: flex;
    justify-content: center;
    background-color: #002F4F;

    .el-input {
      min-width: 400px;
      max-width: 550px;
    }
  }

  .bar_right {
    display: flex;
    align-items: center;
    background-color: #8A4A00;

    .ul_list {
      display: flex;
      background-color: #00a3ff;

      li {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        margin-left: 8px;
        color: white;

        span {
          font-size: 12px;
          color: var(--Bl3_u);
        }
      }

      li:last-child {
        margin-right: 0;
      }

    }
  }
}
</style>
