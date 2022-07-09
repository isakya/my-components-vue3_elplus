<template>
  <el-button @click="hdClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="my-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ElIcon)" :key="index">
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcon from '@element-plus/icons-vue'
import { toLine } from '../../../utils'
import { ref, watch } from "vue"

let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<boolean>(props.visible)

let emits = defineEmits(['update:visible'])

let hdClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

// 监听visible的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  // 每四个为一行
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}

.text {
  font-size: 14px;
}

.icon {
  flex: 1;
}


svg {
  width: 2em;
  height: 2em;
}
</style>  