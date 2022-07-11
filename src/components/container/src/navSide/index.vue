<template>
  <my-menu :data="data" router :defaultActive="$route.path" :collapse="collapse" />
</template>

<script setup lang="ts">
defineProps<{
  collapse: boolean
}>()

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'StarFilled',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Position',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Histogram',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Watch',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Calendar',
    name: '日期选择',
    index: '/chooseDate'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'Location',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'Loading',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Sunny',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Grid',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'MagicStick',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'TrendCharts',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang="scss" scoped>
</style>