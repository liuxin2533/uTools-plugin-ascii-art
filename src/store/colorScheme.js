import { defineStore } from 'pinia'

const COLOR_SCHEME_KEY = 'COLOR_SCHEME'
export const useColorSchemeStore = defineStore('colorSchemes', () => {
  const colorSchemes = ref([
    { title: 'default', style: { color: '#000000', backgroundColor: '#EDF2F9' } },
    { title: 'white', style: { color: '#000000', backgroundColor: '#FFFFFF' } },
    { title: 'belafonte', style: { color: '#45373C', backgroundColor: '#D5CCBA' } },
    { title: 'ocean', style: { color: '#FFFFFF', backgroundColor: '#224FBC' } },
    { title: 'borland', style: { color: '#FFFF4E', backgroundColor: '#0000A4' } },
    { title: 'adventure', style: { color: '#F8DCC0', backgroundColor: '#1F1D45' } },
    { title: 'ubuntu', style: { color: '#EEEEEC', backgroundColor: '#300A24' } },
    { title: 'black', style: { color: '#FFFFFF', backgroundColor: '#000000' } }
  ])

  return { colorSchemes }
})
