<template>
  <div class="tools-wrapper">
    <a-space>
      <a-tooltip v-for="scheme in colorScheme" :content="scheme.title" mini>
        <div :style="scheme.style" class="color-scheme" @click="colorSchemeChange(scheme)">
          Hi
        </div>
      </a-tooltip>
    </a-space>
    <a-space>
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

const $emit = defineEmits(['colorSchemeChange', 'fontChange', 'copy'])


const colorScheme = ref([
  {title: 'default', style: {color: '#000000', backgroundColor: '#EDF2F9'}},
  {title: 'white', style: {color: '#000000', backgroundColor: '#FFFFFF'}},
  {title: 'belafonte', style: {color: '#45373C', backgroundColor: '#D5CCBA'}},
  {title: 'ocean', style: {color: '#FFFFFF', backgroundColor: '#224FBC'}},
  {title: 'borland', style: {color: '#FFFF4E', backgroundColor: '#0000A4'}},
  {title: 'adventure', style: {color: '#F8DCC0', backgroundColor: '#1F1D45'}},
  {title: 'ubuntu', style: {color: '#EEEEEC', backgroundColor: '#300A24'}},
  {title: 'black', style: {color: '#FFFFFF', backgroundColor: '#000000'}}
])

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
