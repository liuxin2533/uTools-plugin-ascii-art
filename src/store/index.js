import {defineStore} from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      favoriteFonts: [],
      name: 'Eduardo',
      isAdmin: true
    }
  },
  actions: {
    addFavoriteFont (fontName) {
      this.favoriteFonts.add
    }
  }
})
