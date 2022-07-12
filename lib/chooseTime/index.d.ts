// 让当前使用该组件库的项目知道该组件库是一个vue插件

import {App} from 'vue'
declare const _default: {
  install(app:App): void
}

export default _default