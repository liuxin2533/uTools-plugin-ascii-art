import fs from 'fs'
import path from 'path'
import os from 'os'

const __dirname = path.resolve()

const fontJsPath = path.resolve(__dirname, 'node_modules', 'figlet', 'importable-fonts')
const fontJsFiles = fs.readdirSync(fontJsPath, { withFileTypes: true, encoding: 'utf-8' })

let importStr = ''
let exportStr = 'export default { \n'
for (const diren of fontJsFiles) {
  if (diren.isFile()) {
    const basename = path.parse(diren.name).name
    const newName = 'F_' + basename.replace(/-/g, '_')
      .replace(/ /g, '_')
      .replace(/'/g, '')
      .toUpperCase()
    importStr += `import ${newName} from "figlet/importable-fonts/${basename}"${os.EOL}`
    exportStr += `"${basename}": ${newName},${os.EOL}`
  }
}
exportStr += '}'

const importableJsPath = path.resolve(__dirname, 'src', 'services', 'figletService', 'fonts.js')

fs.writeFileSync(importableJsPath, importStr + exportStr)

