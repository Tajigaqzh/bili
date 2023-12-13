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
  font-family: inherit;
  font-size: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;



  a {
    display: flex;
    align-items: center;
    height: 64px;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 14px;
    line-height: 64px;
    color: var(--Ba0_u);
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
  }
}
</style>
