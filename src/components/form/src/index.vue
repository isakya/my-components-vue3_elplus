<template>
  <el-form v-if="model" ref="form" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children!.length" :prop="item.prop" :label="item.label">
        <component v-if="item.type !== 'upload'" v-model="model[item.prop!]" :placeholder="item.placeholder"
          v-bind="item.attrs" :is="`el-${item.type}`"></component>
        <el-upload :on-preview="onPreview" :on-remove="onRemove" :on-success="onSuccess" :on-error="onError"
          :on-progress="onProgress" :on-change="onChange" :before-remove="beforeRemove" :before-upload="beforeUpload"
          :http-request="httpRequest" :on-exceed="onExceed" v-bind="item.
          uploadAttrs" v-else>
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item v-if="item.children && item.children.length" :prop="item.prop" :label="item.label">
        <component v-model="model[item.prop!]" v-bind="item.attrs" :placeholder="item.placeholder"
          :is="`el-${item.type}`">
          <component v-for="(child, i) in item.children" :key="i" :label="child.label" :value="child.value"
            :is="`el-${child.type}`">

          </component>
        </component>
      </el-form-item>
    </template>
    <!-- 表单操作项 -->
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, PropType, onMounted, watch } from "vue"
import { FormOptions, FormInstance } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
  // 表单配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function
  }
})

let emits = defineEmits([
  'on-preview',
  'on-remove',
  'on-success',
  'on-error',
  'on-progress',
  'on-change',
  'before-remove',
  'before-upload',
  'on-exceed'
])


let model = ref<any>(null)
let rules = ref<any>(null)
let form = ref<FormInstance | null>()

// 初始化表单
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}
onMounted(() => {
  initForm()
})

// 监听父组件传递进来的options，防止options是接口后台传递进来的，数据发生变化无法实时改变
watch(() => props.options, () => {
  initForm()
}, { deep: true })


// 上传组件的所有方法
// :on-preview="onPreview" 
// :on-remove="onRemove" 
// :on-success="onSuccess" 
// :on-error="onError"
// :on-progress="onProgress"
// :on-change="onChange"
// :before-remove="beforeRemove"
// :before-upload="beforeUpload"
// :http-request="httpRequest"
// :on-exceed="onExceed"

let onPreview = (file: File) => {
  emits('on-preview', file)
}
let onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList })
}
// response是后端返回来的结果，无法做到固定类型
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传图片成功 给表单上传项赋值
  let uploadItem = props.options.find(item => item.type === 'upload')!
  model.value[uploadItem.prop!] = { response, file, fileList }
  emits('on-success', { response, file, fileList })

}
let onError = (err: any, file: File, fileList: FileList) => {
  emits('on-error', { err, file, fileList })

}
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList })

}
let onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })

}
let beforeRemove = (file: File) => {
  emits('before-remove', file)

}
let beforeUpload = (file: File, fileList: FileList) => {
  emits('before-upload', { file, fileList })

}

let onExceed = (file: File, fileList: FileList) => {
  emits('on-exceed', { file, fileList })

}

</script>

<style lang="scss" scoped>
</style>