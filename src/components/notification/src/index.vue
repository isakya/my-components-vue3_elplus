<template>
  <el-popover :width="300">
    <template #reference>
      <el-badge style="cursor: pointer;" :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </el-popover>

</template>

<script setup lang="ts">
import { toLine } from '../../../utils'
import { reactive, toRefs, ref } from "vue"
let props = defineProps({
  // 图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  },
})
</script>

<style lang="scss" scoped>
</style>