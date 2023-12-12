import { useMediaQuery } from '@vueuse/core';
import { type Ref, watch } from 'vue';

/**
 * @description: Adaptive by screen width
 * @returns: isLargeScreen: boolean
 */
const isLargeScreen: Ref<boolean> = useMediaQuery('(min-width: 1024px)');

/**
 * @description: Set the class name of the html tag according to the screen width
 * @param {boolean} newVal
 */
export function useWatchResize(newVal?: boolean): void {
  const elementsByName = document.getElementsByTagName('html');
  const htmlHtmlElement = elementsByName.item(0);
  if (newVal === undefined) {
    if (isLargeScreen.value) {
      htmlHtmlElement?.setAttribute('class', 'win');
    } else {
      htmlHtmlElement?.removeAttribute('class');
    }
  } else {
    if (newVal) {
      htmlHtmlElement?.setAttribute('class', 'win');
    } else {
      htmlHtmlElement?.removeAttribute('class');
    }
  }
}

/**
 * @description: Monitor screen width changes
 * @param {boolean} newVal
 * @param {boolean} _oldVal
 * @returns: void
 */
watch(isLargeScreen, (newVal, _oldValue) => {
  console.log(_oldValue);
  useWatchResize(newVal);
});
