<template>
  <el-button @click="hdClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="dialogVisible">111</el-dialog>
</template>

<script setup lang="ts">
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
</style>  