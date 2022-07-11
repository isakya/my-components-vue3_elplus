<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>表单</template>
    <template #footer>
      <!-- 定义自己的插槽 -->
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['update:visible'])
// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible)

watch(() => props.visible, val => {
  dialogVisible.value = val
})

watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})

</script>

<style lang="scss" scoped>
</style>