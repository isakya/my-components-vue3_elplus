<template>
  <div :class="{ 'my-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <my-form @on-change="onChange" @before-upload="beforeUpload" @on-preview="onPreview" @on-remove="onRemove"
          @before-remove="beforeRemove" @on-exceed="onExceed" @on-success="onSuccess" label-width="100px" ref="form"
          :options="options">
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </my-form>
      </template>
      <template #footer>
        <!-- 定义自己的插槽 -->
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { FormOptions, FormInstance } from "../../form/src/types/types";
import { watch, ref, PropType } from "vue"
let props = defineProps({
  // 
  visible: {
    type: Boolean,
    default: false
  },
  // 表单配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },

  // 让弹框不超出屏幕，只在屏幕区域滚动
  isScroll: {
    type: Boolean,
    default: false
  },

  // 下面都是处理上传文件的事件
  onChange: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  onExceed: {
    type: Function
  },
  onSuccess: {
    type: Function
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