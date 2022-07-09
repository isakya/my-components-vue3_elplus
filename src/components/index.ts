import {App} from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'

const components  = [
  chooseArea,
  chooseIcon
]

// 批量注册组件
export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}