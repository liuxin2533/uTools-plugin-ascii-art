import { defineStore } from 'pinia'
import * as storage from '@/storage'

const FAVORITE_KEY = 'FAVORITE'
export const useFontsStore = defineStore('fonts', () => {

  const favorites = ref([])

  const isFavorite = computed(() => {
    return (fontName) => {
      return favorites.value.indexOf(fontName) > -1
    }
  })

  function toggleFavoriteFont (fontName) {
    const index = favorites.value.indexOf(fontName)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(fontName)
    }
  }

  return { favorites, isFavorite, toggleFavoriteFont }
}, {
  persist: {
    storage: storage
  }
})
