<template>
  <div id="calendar"></div>
</template>

<script setup lang="ts">
import '@fullcalendar/core/vdom' // solves problem with Vite
import { Calendar, EventClickArg } from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction, { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from './types'
import { PropType, ref, onMounted, watch } from "vue"

let props = defineProps({
  // 日历显示的语言
  local: {
    type: String,
    default: 'zh-cn'
  },
  // 视图模式
  initialView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next'
      }
    }
  },
  // 底部工具栏
  footerToolbar: {
    type: Object
  },
  // 事件源
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => []
  }
})

let emits = defineEmits(['dateClick', 'eventClick'])

let calendar = ref<Calendar>()

// 渲染日历的方法
let renderCalendar = () => {
  const el = document.getElementById('calendar');//获取这个节点
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      // 视图模式
      initialView: props.initialView,
      // 语言
      locale: props.local,
      // 按钮文字
      buttonText: props.buttonText,
      // 头部工具栏
      headerToolbar: props.headerToolbar,
      // 底部工具栏
      footerToolbar: props.footerToolbar,
      eventSources: [
        {
          // 渲染日历的事件
          events(e, callback) {
            if (props.events.length) callback(props.events)
            else callback([])
          }
        }
      ],
      // 点击日历上的某一天
      dateClick(info: DateClickArg) {
        emits('dateClick', info)
      },
      // 点击日历上的某个事件
      eventClick(info: EventClickArg) {
        emits('eventClick', info)
      }
    })
    calendar.value.render()
  }
}

onMounted(() => {
  renderCalendar()
})

// 监听父组件传递的事件源
watch(() => props.events, () => {
  renderCalendar()
}, { deep: true })


</script>

<style lang="scss" scoped>
</style>