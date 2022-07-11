<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>
      <my-form label-width="100px" ref="form" :options="options"></my-form>
    </template>
    <template #footer>
      <!-- 定义自己的插槽 -->
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { FormOptions, FormInstance } from "../../form/src/types/types";
import { watch, ref, PropType } from "vue"
let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  // 表单配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
})
let emits = defineEmits(['update:visible'])

// 表单实例
let form = ref<FormInstance | null>()

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