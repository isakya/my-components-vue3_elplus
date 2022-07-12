import {App} from 'vue'
import chooseIcon from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default{
  // 导出install的方法是 vue.use的固定用法
  // 要么函数叫install，要么对象里面有个属性叫install
  install(app: App) {
    app.component('choose-icon', chooseIcon)
  }
}