import {defineStore} from 'pinia'

const FAVORITE_KEY = 'FAVORITE'
export const useFontsStore = defineStore('fonts', () => {
  const favorites = ref([])

  function addFavoriteFont (fontName) {
    if (favorites.value.includes(fontName)) {
      return
    }
    favorites.value.push(fontName)
  }

  function removeFavoriteFont (fontName) {
    favorites.value = favorites.value.filter(f => f !== fontName)
  }

  return {favorites, addFavoriteFont, removeFavoriteFont}
})
