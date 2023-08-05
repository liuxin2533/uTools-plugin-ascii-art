import * as storage from '@/storage/index.js'

const FAVORITE_KEY = 'FAVORITE'

export function favorite (fontName) {
  let list = storage.getItem(FAVORITE_KEY)
  if (!list) {
    list = []
  }
  list.push(fontName)
  storage.setItem(FAVORITE_KEY, list)
  return true
}

export function unFavorite (fontName) {
  let list = storage.getItem(FAVORITE_KEY) || []
  if (list.includes(fontName)) {
    list = list.filter(x => x !== fontName)
    storage.setItem(FAVORITE_KEY, list)
  }
  return true
}
