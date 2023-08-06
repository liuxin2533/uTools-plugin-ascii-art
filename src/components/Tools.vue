<template>
  <div class="tools-wrapper">
    <a-space>
      <a-tooltip v-for="scheme in colorSchemes" :content="scheme.title" mini>
        <div :style="scheme.style" class="color-scheme" @click="colorSchemeChange(scheme)">
          Hi
        </div>
      </a-tooltip>
    </a-space>
    <a-space>
      <a-tooltip :content="isFavorite(curFont)?'取消收藏该字体':'收藏该字体'" position="tr" mini>
        <a-button shape="circle" size="small" type="outline" @click="toggleFavorite">
          <icon-star-fill v-show="isFavorite(curFont)"></icon-star-fill>
          <icon-star v-show="!isFavorite(curFont)"></icon-star>
        </a-button>
      </a-tooltip>
      <a-tooltip content="上一个字体" position="tr" mini>
        <a-button shape="circle" size="small" type="outline" @click="fontChange(-1)">
          <icon-left></icon-left>
        </a-button>
      </a-tooltip>
      <a-tooltip content="下一个字体" position="tr" mini>
        <a-button shape="circle" size="small" type="outline" @click="fontChange(1)">
          <icon-right></icon-right>
        </a-button>
      </a-tooltip>
      <a-tooltip content="复制" position="tr" mini>
        <a-button shape="circle" size="small" type="outline" @click="copy">
          <icon-copy></icon-copy>
        </a-button>
      </a-tooltip>
    </a-space>
  </div>
</template>
<script setup>

import { useColorSchemeStore } from '@/store/colorScheme.js'
import { useFontsStore } from '@/store/fonts.js'

const $emit = defineEmits(['colorSchemeChange', 'fontChange', 'copy'])
const $props = defineProps({
  curFont: String
})
const colorSchemeStore = useColorSchemeStore()
const fontsStore = useFontsStore()

const { colorSchemes } = storeToRefs(colorSchemeStore)
const { isFavorite } = storeToRefs(fontsStore)

function toggleFavorite () {
  fontsStore.toggleFavoriteFont($props.curFont)
}

function colorSchemeChange (scheme) {
  $emit('colorSchemeChange', scheme)
}

function fontChange (index) {
  $emit('fontChange', index)
}

function copy () {
  $emit('copy')
}
</script>
<style scoped lang="less">
.tools-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;


  .color-scheme {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>
