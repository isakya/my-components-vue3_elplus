<template>
  table
</template>

<script setup lang="ts">
import { PropType, ref } from "vue"
import { TableOptions } from "./types"

let props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    require: true
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>