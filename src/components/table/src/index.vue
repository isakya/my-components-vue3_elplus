<template>
  <el-table :data="data">
    <template v-for="(item, index) in options" :key="index">
      <el-table-column :label="item.label" :prop="item.prop" :align="item.align" :width="item.width"></el-table-column>
    </template>
  </el-table>
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