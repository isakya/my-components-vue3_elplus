import {defineComponent, PropType, useAttrs} from 'vue'
import { MenuItem } from './types'
import { toLine } from '../../../utils'



export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true
    },
    // 默认选中菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回jsx的代码
    let renderMenu = (data:MenuItem[]) => {
      // 接收props中未定义的属性
      let attrs = useAttrs()
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        item.i = `el-icon-${toLine(item.icon!)}`
        // 处理sub-menu的插槽
        let slot = {
          title:() => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          }
        }
        // 递归渲染children
        if(item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slot}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 正常渲染普通的菜单
        return (
          <el-menu-item 
            index={item.index}
            {...attrs}
          >
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})
