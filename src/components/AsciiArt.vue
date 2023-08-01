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
              :options="fonts"
              allow-search
              allow-clear
              size="large"
              @change="gen"></a-select>
          <a-popover title="字体设置" trigger="click">
            <a-button type="primary" size="large">
              <icon-settings></icon-settings>
            </a-button>
            <template #content>
              <a-form :model="settingModel" size="small" auto-label-width style="min-width: 300px;">
                <a-form-item field="horizontalLayout" label="水平间距" tooltip="设置字符水平间距，通常您不需要调整它">
                  <a-select v-model="settingModel.horizontalLayout" :options="fontLayout" @change="gen"></a-select>
                </a-form-item>
                <a-form-item field="verticalLayout" label="垂直间距"
                             tooltip="设置字符垂直间距，通常您不需要调整它，大部分字体不支持此选项">
                  <a-select v-model="settingModel.verticalLayout" :options="fontLayout" @change="gen"></a-select>
                </a-form-item>
                <!--                <a-form-item field="width" label="宽度">-->
                <!--                  <a-select v-model="settingModel.width" :options="fonts"></a-select>-->
                <!--                </a-form-item>-->
                <!--                <a-form-item field="horizontalLayout" label="水平布局">-->
                <!--                  <a-select v-model="settingModel.horizontalLayout" :options="fonts"></a-select>-->
                <!--                </a-form-item>-->
              </a-form>
            </template>
          </a-popover>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="margin-top: 20px;position: relative;">
      <Tools @colorSchemeChange="colorSchemeChange" @fontChange="fontChange" @copy="copy"></Tools>
      <pre class="ascii-art-wrapper" :style="colorScheme.style">
          {{ artStr }}
      </pre>
    </a-layout-content>
    <a-layout-footer>
      <a-space direction="vertical" fill>
        <a-alert type="normal">
          <template #icon>
            <icon-exclamation-circle-fill/>
          </template>
          字体来源: figlet.js
        </a-alert>
      </a-space>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import {fonts, textSync} from '@/services/figletService'
import {Message} from '@arco-design/web-vue'
import Tools from '@/components/Tools.vue'

const strRef = ref()
const colorScheme = ref({
  style: {}
})
const data = ref({
  str: 'hi, friend',
  font: 'Ghost'
})
const artStr = ref('')
const settingModel = ref({
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: null,
  whitespaceBreak: false
})

const fontLayout = [
  {label: '默认', value: 'default'}, // 按照字体设计者默认的间距
  {label: '完整字符间距', value: 'full'}, // 完整字母间距
  {label: '最小字符间距', value: 'fitted'}, // 最小字母间距
  {label: 'controlled smushing', value: 'controlled smushing'}, // 通用
  {label: 'universal smushing', value: 'universal smushing'} // 通用
]

function gen () {
  if (!data.value.str || !data.value.font) {
    return
  }
  artStr.value = textSync(data.value.str, {
    font: data.value.font,
    ...settingModel.value
  })
}

function colorSchemeChange (scheme) {
  colorScheme.value = scheme
}

function fontChange (changeIndex) {
  let index = fonts.findIndex(x => x.value === data.value.font)
  index += changeIndex

  index = Math.min(Math.max(index, 0), fonts.length - 1)
  data.value.font = fonts[index].value
  gen()
}

function copy () {
  navigator.clipboard.writeText(artStr.value)
  Message.success({content: '复制成功!', position: 'top'})
}

gen()

onMounted(() => {
  strRef.value.focus()
})

</script>

<style scoped>
.ascii-art-wrapper {
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
