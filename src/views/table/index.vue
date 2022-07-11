<template>
  <my-table :data="tableData" :options="options"></my-table>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
import { TableOptions } from "../../components/table/src/types";
// 表格数据
let tableData = [
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
  },
]

// 表格配置
let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center'
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
]

</script>

<style lang="scss" scoped>
</style>