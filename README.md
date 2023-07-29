# uTools plugin: ASCII Art

---

ASCII Art可以把一段文本用符号的形式展现出来，就像下面这样：`Hi, friend`

```html
           ('-. .-.                          _  .-')             ('-.       .-') _  _ .-') _   
( OO )  /                         ( \( -O )          _(  OO)     ( OO ) )( (  OO) )  
,--. ,--.  ,-.-')          ,------.,------.  ,-.-') (,------.,--./ ,--,'  \     .'_  
|  | |  |  |  |OO)      ('-| _.---'|   /`. ' |  |OO) |  .---'|   \ |  |\  ,`'--..._) 
|   .|  |  |  |  \      (OO|(_\    |  /  | | |  |  \ |  |    |    \|  | ) |  |  \  ' 
|       |  |  |(_/      /  |  '--. |  |_.' | |  |(_/(|  '--. |  .     |/  |  |   ' | 
|  .-.  | ,|  |_.'      \_)|  .--' |  .  '.',|  |_.' |  .--' |  |\    |   |  |   / : 
|  | |  |(_|  |.-.        \|  |_)  |  |\  \(_|  |    |  `---.|  | \   |   |  '--'  / 
`--' `--'  `--'',/         `--'    `--' '--' `--'    `------'`--'  `--'   `-------'  
```
# 快速开始
**安装**
```bash
yarn install
```
**运行**
```bash
yarn dev

VITE v4.4.6  ready in 495 ms
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help

```
**加载字体文件**
```bash
yarn loadfonts
```
> 项目使用[figlet.js](https://github.com/patorjk/figlet.js)生成字符画，所有字体均来源于`figlet/importable-fonts/*.js`
> 
> 因为运行在浏览器器中，figlet不支持在浏览器中同步加载字体，所以我们用预先加载+转换的方式生成可用的字体数据

**如何在uTools中运行**
- 启动项目`yarn dev`
- 打开uTools开发者工具
- 新建插件项目
- 选择插件配置文件`uTools-plugin-ascii-art/public/plugin.json`
- 点击开始运行
- 回到uTools主输入框，输入`ascii art`
- 唤起`ascii art`插件界面，即可使用

**新功能计划**

- [ ] 彩蛋
- [ ] 支持多个主题色
- [ ] 支持导入字体
- [ ] 支持图片转字符画



