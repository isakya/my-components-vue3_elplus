<template>
  <my-table elementLoadingText="加载中..." elementLoadingLackground="rgba(122, 122, 122, 0.8)" :elementLoadingSvg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50" :data="tableData" :options="options">
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>
    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="edit(scope)">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
  </my-table>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
import { TableOptions } from "../../components/table/src/types";
interface TableData {
  date: string,
  name: string,
  address: string
}

let tableData = ref<TableData[]>([])

// 加载图标
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

setTimeout(() => {
  // 表格数据
  tableData.value = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]

}, 3000)


// 表格配置
let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date'
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    // 自定义列
    slot: 'name'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    align: 'center',
    action: true
  }
]

let edit = (scope: any) => {
  console.log(scope);

}

</script>

<style lang="scss" scoped>
</style>