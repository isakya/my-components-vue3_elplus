<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon-arrowup :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'">
      </el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else></el-icon-arrowdown>
    </div>
  </div>
</template>

<script setup lang="ts">
// useSlots 可以拿到插槽的内容，用来判断插槽有没被使用
// 匿名插槽的名字默认叫default，所以useSlots().default,具名插槽就是 useSlots().xxx（自定义）
import { useSlots } from "vue"
let props = defineProps({
  // 当前的趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示的文字
  // 1. 从父组件传递过来的数据
  // 2. 插槽的形式
  text: {
    type: String,
    default: 'title'
  },
  // 颜色反转,只在默认颜色下生效，自定义颜色不生效
  reverseColor: {
    type: Boolean,
    default: false
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
})
let slots = useSlots()
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>