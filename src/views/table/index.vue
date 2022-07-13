<template>
  <my-table elementLoadingText="加载中..." elementLoadingLackground="rgba(122, 122, 122, 0.8)" :elementLoadingSvg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50" :data="tableData" :options="options" @confirm="check"
    @cancel="close" isEditRow v-model:editRowIndex="editRowIndex" pagination :total="total" :pageSize="pageSize"
    paginationAlign="right" :currentPage="current" @sizeChange="sizeChange" @currentChange="currentChange">
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
    <template #editRow="{ scope }">
      <el-button size="small" type="primary">确认</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
    <template #editCell="scope">
      <div style="display:flex; margin-left: 8px;">
        <el-button size="small" type="success">确定</el-button>
        <el-button size="small">取消</el-button>
      </div>
    </template>
  </my-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { TableOptions } from "../../components/table/src/types";
import axios from 'axios'


interface TableData {
  date: string,
  name: string,
  address: string
}

let tableData = ref<TableData[]>([])

let editRowIndex = ref<string>('')

// 分页相关数据
let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)

// 获取table数据
let getData = () => {
  axios.post('/api/list', {
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    tableData.value = res.data.data.rows
    total.value = res.data.data.total
  })
}

onMounted(() => {
  getData()
})

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



// 表格配置
let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editable: true
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    // 自定义列
    slot: 'name',
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
    editable: true
  },
  {
    label: '操作',
    prop: '',
    align: 'center',
    action: true
  }
]

// 进入编辑状态
let edit = (scope: any) => {
  // console.log(scope);
  editRowIndex.value = 'edit'

}
// 点击 勾 √
let check = (scope: any) => {
  console.log(scope);
}
// 点击 叉 ×
let close = (scope: any) => {
  console.log(scope)

}

let sizeChange = (val: number) => {
  pageSize.value = val
  getData()
  console.log('sizeChange', val);
}
let currentChange = (val: number) => {
  current.value = val
  getData()
  console.log('currentChange', val);
}
</script>

<style lang="scss" scoped>
</style>