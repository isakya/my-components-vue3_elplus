import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import {toLine} from './utils'
import myUI from './components'

// 全部引入组件测试
// import myUI from '../lib/isakya-element-components.es'
// import '../lib/style.css'

// 单独引入组件测试
// import chooseIcon from '../lib/chooseIcon/index.es'
// import   '../lib/chooseIcon/style.css'


import './mock'



const app = createApp(App)

// 全局注册图标 牺牲一点性能
// 改造成 el-icon-xxx 名字
for(let i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router)
.use(ElementPlus)
// 测试单独引入
// .use(chooseIcon)
.use(myUI)
app.mount('#app')
