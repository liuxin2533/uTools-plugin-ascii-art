import Fonts from './fonts.js'
import figlet from 'figlet/lib/figlet.js'

const fontList = []
Object.entries(Fonts).forEach(([k, v]) => {
  figlet.parseFont(k, v)
  fontList.push({
    label: k,
    value: k
  })
})
export const fonts = fontList

export const textSync = figlet.textSync

export default {}
