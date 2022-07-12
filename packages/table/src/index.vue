<template>
  <el-table v-bind="$attrs" :element-loading-text="elementLoadingText" :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg" :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :element-loading-background="elementLoadingLackground" :data="tableData" v-loading="isLoading"
    @row-click="rowClick">
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column :label="item.label" :prop="item.prop" :align="item.align" :width="item.width">
        <template #default="scope">
          <!-- 有编辑行操作的时候 -->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 没有编辑行操作的时候 -->
          <template v-else>
            <!-- 编辑输入框 -->
            <template v-if="(scope.$index + scope.column.id) === currentEdit">
              <div class="edit-container">
                <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                <div @click.stop="clickEditCell(scope)">
                  <!-- 如果自定义 x 和 √ 就用slot -->
                  <slot name="editCell" :scope="scope" v-if="$slots.editCell"></slot>
                  <!-- 否则就用默认 的 x 和 √ -->
                  <div class="icons" v-else>
                    <el-icon-check class="check" @click.stop="check(scope)"></el-icon-check>
                    <el-icon-close class="close" @click.stop="close(scope)"></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <!-- 正常数据显示 -->
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component :is="`el-icon-${toLine(editIcon)}`" @click.stop="clickEdit(scope)" class="edit"
                v-if="item.editable">
              </component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <!-- 操作项 -->
    <el-table-column :label="actionOptions!.label" :align="actionOptions!.align" :width="actionOptions!.width">
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination" :style="{ 'justify-content': paginationAlignJustify }" v-if="pagination">
    <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed, onMounted, watch } from "vue"
import { TableOptions } from "./types"
import { toLine } from '../../utils'
import cloneDeep from 'lodash/cloneDeep'

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
  // 背景遮罩的颜色
  elementLoadingLackground: {
    type: String
  },
  // 自定义编辑单元格的图标
  editIcon: {
    type: String,
    default: 'edit'
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // 当前是第几页的数据
  currentPage: {
    type: Number,
    default: 1
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10
  },
  // 每页显示数据数量选项
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 30, 40]
  },
  // 数据的总数
  total: {
    type: Number,
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false
  },
  // 分页的排列方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  }
})

// 分发事件
let emits = defineEmits(['confirm', 'cancel', 'update:editRowIndex', 'sizeChange', 'currentChange'])

// 当前点击的单元格
let currentEdit = ref<string>('')

// 拷贝一份表格的数据
let tableData = ref<any[]>(cloneDeep(props.data))

// 拷贝一份按钮的标识
let cloneEditRowIndex = ref<string>(props.editRowIndex)

// 监听父组件传递过来的数据
watch(() => props.data, val => {
  tableData.value = cloneDeep(val)
  tableData.value.map(item => {
    // 代表当前是否是可编辑的状态
    item.rowEdit = false
  })
}, { deep: true })

// 监听父组件传递过来的标识
watch(() => props.editRowIndex, val => {
  if (val) cloneEditRowIndex.value = val
})

onMounted(() => {
  tableData.value.map(item => {
    // 代表当前是否是可编辑的状态(添加判断属性)
    item.rowEdit = false
  })
})

// 点击编辑图标
let clickEdit = (scope: any) => {
  // 得到唯一标识 scope.$index(行)，scope.column.id(列)，如（x,y）坐标点一样，每个单元格都是唯一的坐标点，不会 重复
  currentEdit.value = scope.$index + scope.column.id
  console.log(scope)

}

let clickEditCell = (scope: any) => {
  // 点击后关闭编辑状态
  currentEdit.value = ''
}

// 点击 勾 √
let check = (scope: any) => {
  emits('confirm', scope)
}
// 点击 叉 ×
let close = (scope: any) => {
  emits('cancel', scope)

}

// 点击每一行的事件
let rowClick = (row: any, column: any) => {
  // 判断当前点击的是否是操作项的内容（按钮）
  if (column.label === actionOptions.value!.label) {
    // 编辑行的操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      // 点击的按钮时做可编辑的操作
      row.rowEdit = !row.rowEdit
      // 重置其他数据的isEditRow
      tableData.value.map(item => {
        if (item !== row) item.rowEdit = false
      })
      // 要重置按钮的标识
      if (!row.rowEdit) emits('update:editRowIndex', '')
    }
  }
}

// 分页的条数改变
let handleSizeChange = (val: number) => {
  emits('sizeChange', val)
}

// 分页的页数改变
let handleCurrentChange = (val: number) => {
  emits('currentChange', val)
}



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

// 分页组件排列方式
let paginationAlignJustify = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'center') return 'center'
  else return 'flex-end'
})
</script>

<style lang="scss" scoped>
.edit {
  position: relative;
  top: 2px;
  left: 4px;
  cursor: pointer;
}

.edit-container {
  display: flex;
  align-items: center;

  .icons {
    display: flex;

    svg {
      width: 1.1em;
      height: 1.1em;
      margin-left: 8px;
      cursor: pointer;
    }

    .check {
      color: red;
    }

    .close {
      color: green;
    }
  }
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>