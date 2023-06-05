# Vue 3 + TypeScript + Vite

## [演示站点](https://isakya.github.io/isakya-element-components-web/)

# 介绍
该项目是基于 `vite2` + `vue3` + `typescript` + `element-plus` 二次封装的组件库，提供了一下组件：

- 省市区选择器
- 时间选择器
- 日期选择器
- 城市选择器
- 趋势标记
- 通知列表
- 通知菜单
- 导航菜单
- 动态进度条
- 可配置型表单
- 可配置型表格
- 弹出框表单
- 日历




# 快速上手
因为当前组件库是基于`element-plus`二次封装的，所以使用该组件库时必须确保在项目当中已安装和正确使用了`element-plus`，[element-plus安装指南](https://element-plus.org/zh-CN/guide/installation.html)

## 使用指南
1. 在项目目录里安装`isakya-element-components`
 - npm安装: `npm i -S isakya-element-components`
 - cnpm安装: `cnpm i -S isakya-element-components`
 - pnpm安装: `pnpm i -S isakya-element-components`
 - yarn安装: `yarn add -S isakya-element-components` 


2. 全局引入  
在`main.ts`文件中写入以下代码：
``` js
// 全局引入
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import isakyaUI from 'isakya-element-components'
import 'isakya-element-components/style.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(isakyaUI)
```

3. 按需引入
``` js
// 按需引入
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import chooseIcon from 'isakya-element-components/chooseIcon'
import 'isakya-element-components/chooseIcon/style.css'
import chooseArea from 'isakya-element-components/chooseIcon'
// ...

const app = createApp(App)

app.use(ElementPlus)
app.use(chooseIcon)
app.use(chooseArea)
// ...
```

4. 使用  
具体用法参照以下文档了解具体使用方式  
文档更新中...




