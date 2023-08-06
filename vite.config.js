import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(path.resolve(), 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'pinia'
      ],
      resolvers: [ArcoResolver()]
    }),
    vitePluginForArco({
      style: true,
      modifyVars: {
        'arcoblue-6': '#043daf'
      }
    })
    // Components({
    //   resolvers: [
    //     ArcoResolver({
    //       importStyle: 'less',
    //       resolveIcons: true,
    //       sideEffect: true
    //     })
    //   ]
    // })
  ]
})
