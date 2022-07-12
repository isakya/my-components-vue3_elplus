import {defineComponent, PropType, useAttrs} from 'vue'
import { MenuItem } from './types'
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'


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
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 子菜单的键名
    children: {
      type: String,
      default: 'children'
    }
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回jsx的代码
    let RenderMenu = (data:any[]) => {
      // 接收props中未定义的属性
      let attrs = useAttrs()
      return data.map((item: any) => {
        // 每个菜单的图标
        // item.i = `el-icon-${toLine(item[props.icon]!)}`
        item.i = (Icons as any)[item[props.icon]!]
        // 处理sub-menu的插槽
        let slot = {
          title:() => {
            return (
              <>
                <item.i  />
                {/* {`<${item.i} />`} */}
                <span>{item[props.name]}</span>
              </>
            )
          }
        }
        // 递归渲染children
        if(item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slot}>
              {RenderMenu(item[props.children])}
            </el-sub-menu>
          )
        }
        // 正常渲染普通的菜单
        return (
          <el-menu-item 
            index={item[props.index]}
            {...attrs}
          >
            <item.i />
            <span>{item[props.name]}</span>
          </el-menu-item>
        )
      })
    }
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router}>
          {RenderMenu(props.data)}
        </el-menu>
      )
    }
  }
})