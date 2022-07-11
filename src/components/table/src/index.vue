<template>
  <el-table :element-loading-text="elementLoadingText" :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg" :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :element-loading-background="elementLoadingLackground" :data="data" v-loading="isLoading">
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
  },
  // 加载文案
  elementLoadingText: {
    type: String
  },
  // 自定义加载图标
  elementLoadingSpinner: {
    type: String
  },
  // 自定义加载图标 Svg 格式
  elementLoadingSvg: {
    type: String
  },
  // 必须有这个才会显示svg图标
  // element-loading-svg-view-box="-10, -10, 50, 50" 格式
  elementLoadingSvgViewBox: {
    type: String
  },
  // 	背景遮罩的颜色
  elementLoadingLackground: {
    type: String
  },
})

// 过滤操作选项之后的配置
let tableOptions = computed(() => {
  return props.options!.filter(item => !item.action)
})

// 找出操作项的配置
let actionOptions = computed(() => {
  return props.options!.find(item => item.action)
})

// 表格是否在加载中
let isLoading = computed(() => {
  // 没有表格数据，或表格数据为一个空数组时需要加载效果
  return !props.data || !props.data.length
})

</script>

<style lang="scss" scoped>
</style>