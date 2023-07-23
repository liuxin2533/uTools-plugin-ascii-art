import Fonts from './fonts.js'
import figlet from 'figlet/lib/figlet.js'

Object.entries(Fonts).forEach(([k, v]) => {
  figlet.parseFont(k, v)
})

export default figlet
