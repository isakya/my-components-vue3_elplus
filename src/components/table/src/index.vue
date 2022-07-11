<template>
  <el-table :data="data">
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column v-if="!item.slot" :label="item.label" :prop="item.prop" :align="item.align" :width="item.width">
      </el-table-column>
      <el-table-column v-else :label="item.label" :prop="item.prop" :align="item.align" :width="item.width">
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <!-- 操作项 -->
    <el-table-column :label="actionOptions!.label" :align="actionOptions!.align" :width="actionOptions!.width">
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>

</template>

<script setup lang="ts">
import { PropType, ref, computed } from "vue"
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

// 过滤操作选项之后的配置
let tableOptions = computed(() => {
  return props.options!.filter(item => !item.action)
})

// 找出操作项的配置
let actionOptions = computed(() => {
  return props.options!.find(item => item.action)
})
console.log(actionOptions);

</script>

<style lang="scss" scoped>
</style>