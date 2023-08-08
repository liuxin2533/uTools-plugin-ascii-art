<template>
  <a-layout style="padding: 10px;">
    <a-layout-header class="header-content">
      <a-row>
        <a-col flex="auto" style="padding-right: 10px;">
          <a-input
            ref="strRef"
            v-model="data.str"
            allow-clear
            size="large"
            placeholder="输入字符试试吧~仅支持 ASCII 字符, 部分字体仅支持纯英文"
            @input="gen"></a-input>
        </a-col>
        <a-col flex="230px" style="display: flex;">
          <a-select
            v-model="data.font"
            :options="_fonts"
            allow-search
            allow-clear
            size="large"
            @change="gen"></a-select>
          <FontSetting @change="onFontSettingChange" @toggle-favorite-fonts="onToggleFavoriteFonts"></FontSetting>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="margin-top: 20px;position: relative;">
      <Tools
        :cur-font="data.font"
        @colorSchemeChange="colorSchemeChange"
        @fontChange="fontChange"
        @copy="copy"></Tools>
<pre class="ascii-art-wrapper" :style="colorScheme.style">
{{artStr}}
</pre>
    </a-layout-content>
    <a-layout-footer>
      <a-space direction="vertical" fill>
        <a-alert type="normal">
          <template #icon>
            <icon-exclamation-circle-fill />
          </template>
          字体来源: figlet.js
        </a-alert>
      </a-space>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { fonts, textSync } from '@/services/figletService'
import { Message } from '@arco-design/web-vue'
import Tools from '@/components/Tools.vue'
import FontSetting from '@/components/FontSetting.vue'
import { useFontsStore } from '@/store/fonts.js'

const fontsStore = useFontsStore()

const strRef = ref()
const colorScheme = ref({
  style: {}
})
const data = ref({
  str: 'hi, friend',
  font: 'Ghost'
})
const artStr = ref('')

const fontSetting = {}
const onlyFavorite = ref(false)

const _fonts = computed(() => {
  return onlyFavorite.value ? fonts.filter(x => fontsStore.isFavorite(x.value)) : fonts
})

function onFontSettingChange (value) {
  Object.assign(fontSetting, value)
  gen()
}

function onToggleFavoriteFonts (value) {
  onlyFavorite.value = value
}

function gen () {
  if (!data.value.str || !data.value.font) {
    return
  }
  artStr.value = textSync(data.value.str, {
    font: data.value.font,
    ...fontSetting
  })
  console.log(artStr.value)
}

function colorSchemeChange (scheme) {
  colorScheme.value = scheme
}

function fontChange (changeIndex) {
  const fontList = _fonts.value
  let index = fontList.findIndex(x => x.value === data.value.font)
  index += changeIndex

  if (index < 0) {
    index = fontList.length - 1
  } else if (index >= fontList.length) {
    index = 0
  }
  if (!fontList[index]) {
    Message.warning({ content: '好像没有别的字体啦!', position: 'top' })
    return
  }
  data.value.font = fontList[index].value
  gen()
}

function copy () {
  navigator.clipboard.writeText(artStr.value)
  Message.success({ content: '复制成功!', position: 'top' })
}

gen()

onMounted(() => {
  strRef.value.focus()
})

</script>

<style scoped>
.ascii-art-wrapper {
  font-family: Menlo,Monaco,Consolas,Andale Mono,lucida console,Courier New,monospace;
  padding: 30px 20px 0 20px;
  min-height: 210px;
  background-color: #edf2f9;
  color: #000;
  margin-top: 10px;
  font-weight: 900;
  overflow-x: auto;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
