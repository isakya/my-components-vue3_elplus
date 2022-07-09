<template>
  <div class="trend">
    <div class="text">
      {{ text }}
    </div>
    <div class="icon">
      <el-icon-arrowup :style="{ color: upIconColor }" v-if="type === 'up'"></el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: downIconColor }" v-else></el-icon-arrowdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
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
    default: '文字'
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