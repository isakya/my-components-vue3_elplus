<template>
  <el-table :element-loading-text="elementLoadingText" :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg" :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :element-loading-background="elementLoadingLackground" :data="data" v-loading="isLoading">
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column :label="item.label" :prop="item.prop" :align="item.align" :width="item.width">
        <template #default="scope">
          <!-- 编辑输入框 -->
          <template v-if="(scope.$index + scope.column.id) === currentEdit">
            <div class="edit-container">
              <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
              <div @click="clickEditCell(scope)">
                <!-- 如果自定义 x 和 √ 就用slot -->
                <slot name="editCell" :scope="scope" v-if="$slots.editCell"></slot>
                <!-- 否则就用默认 的 x 和 √ -->
                <div class="icons" v-else>
                  <el-icon-check class="check" @click="check(scope)"></el-icon-check>
                  <el-icon-close class="close" @click="close(scope)"></el-icon-close>
                </div>
              </div>
            </div>
          </template>
          <!-- 正常数据显示 -->
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop!] }}</span>
            <component :is="`el-icon-${toLine(editIcon)}`" @click="clickEdit(scope)" class="edit" v-if="item.editable">
            </component>
          </template>
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
import { toLine } from '../../../utils'

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
  }
})

// 分发事件
let emits = defineEmits(['check', 'close'])

// 当前点击的单元格
let currentEdit = ref<string>('')


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
  emits('check', scope)
}
// 点击 叉 ×
let close = (scope: any) => {
  emits('close', scope)

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
</style>