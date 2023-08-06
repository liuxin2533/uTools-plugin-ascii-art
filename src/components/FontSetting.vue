<template>
  <a-popover title="字体设置" trigger="click">
    <a-button type="primary" size="large">
      <icon-settings></icon-settings>
    </a-button>
    <template #content>
      <a-form :model="settingModel" size="small" auto-label-width style="min-width: 300px;">
        <a-form-item label="仅显示收藏" tooltip="仅显示收藏字体，未收藏字体不显示">
          <a-checkbox v-model="onlyFavorite" :options="fontLayout" @change="toggleFavoriteFonts"></a-checkbox>
        </a-form-item>
        <a-form-item field="horizontalLayout" label="水平间距" tooltip="设置字符水平间距，通常您不需要调整它">
          <a-select v-model="settingModel.horizontalLayout" :options="fontLayout" @change="change"></a-select>
        </a-form-item>
        <a-form-item field="verticalLayout" label="垂直间距"
                     tooltip="设置字符垂直间距，通常您不需要调整它，大部分字体不支持此选项">
          <a-select v-model="settingModel.verticalLayout" :options="fontLayout" @change="change"></a-select>
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
</template>

<script setup>

const fontLayout = [
  { label: '默认', value: 'default' }, // 按照字体设计者默认的间距
  { label: '完整字符间距', value: 'full' }, // 完整字母间距
  { label: '最小字符间距', value: 'fitted' }, // 最小字母间距
  { label: 'controlled smushing', value: 'controlled smushing' }, // 通用
  { label: 'universal smushing', value: 'universal smushing' } // 通用
]

const $emit = defineEmits(['change', 'toggleFavoriteFonts'])

const onlyFavorite = ref(false)
const settingModel = ref({
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: null,
  whitespaceBreak: false
})

function toggleFavoriteFonts () {
  $emit('toggleFavoriteFonts', onlyFavorite.value)
}

function change () {
  $emit('change', settingModel.value)
}
</script>

<style scoped lang="less">

</style>
