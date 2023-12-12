<script setup lang="ts">
import { HpPopoverProps } from '~/popup';
defineOptions({
  name: 'HpPopover',
});
withDefaults(defineProps<HpPopoverProps>(), {});
</script>

<template>
  <el-popover
    v-if="popupTitle"
    placement="bottom"
    trigger="hover"
    :title="popupTitle"
    :offset="40"
    :show-arrow="false"
  >
    <template #reference>
      <li class="v-popover-wrap my-hover-bounce flex items-center">
        <a>
          <slot name="left"></slot>
          <span>{{ buttonName }}</span>
          <slot name="right"></slot>
        </a>
      </li>
    </template>
  </el-popover>
 <li class="v-popover-wrap my-hover-bounce flex items-center" v-else>
    <a>
      <slot name="left"></slot>
      <span>{{ buttonName }}</span>
      <slot name="right"></slot>
    </a>
  </li>
</template>

<style scoped lang="scss">
.v-popover-wrap {
  position: relative;
  font-weight: 400;
  line-height: 1.25;
  font-style: normal;
  font-family: inherit;
  font-size: 100%;



  a {
    color: var(--Ba0_u);
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
</style>
