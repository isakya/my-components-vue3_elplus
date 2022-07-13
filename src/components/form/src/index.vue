<template>
  <el-form v-if="model" ref="form" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item.children || !item.children!.length" :prop="item.prop" :label="item.label">
        <component v-if="item.type !== 'upload' && item.type !== 'editor'" v-model="model[item.prop!]"
          :placeholder="item.placeholder" v-bind="item.attrs" :is="`el-${item.type}`"></component>
        <el-upload :on-preview="onPreview" :on-remove="onRemove" :on-success="onSuccess" :on-error="onError"
          :on-progress="onProgress" :on-change="onChange" :before-remove="beforeRemove" :before-upload="beforeUpload"
          :http-request="httpRequest" :on-exceed="onExceed" v-bind="item.
          uploadAttrs" v-if="item.type === 'upload'">
          <!-- 上传组件的占位符 -->
          <slot name="uploadArea"></slot>
          <!-- 上传组件的提示信息 -->
          <slot name="uploadTip"></slot>
        </el-upload>
        <div id="editor" v-if="item.type === 'editor'"></div>
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
import { ref, PropType, onMounted, watch, nextTick } from "vue"
import { FormOptions, FormInstance } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'
import E from "wangeditor"

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
let edit = ref()

// 初始化表单
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if (item.type === 'editor') {
        // 初始化富文本操作
        // nextTick获取更新之后的dom
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor')
            editor.config.placeholder = item.placeholder!
            editor.create()
            // 初始化富文本内容 
            editor.txt.html(item.value)
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml

            }
            // 存储edit实例，用来给函数外部使用
            edit.value = editor
          }
        })
      }
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重置表单
let resetFields = () => {
  // 重置element—plus的表单,直接调用表单重置的方法
  form.value!.resetFields()
  // 重置富文本编辑器的内容
  // 获取到富文本的配置项
  if (props.options && props.options.length) {
    let editorItem = props.options.find(item => item.type === 'editor')!
    // 把富文本编辑器的内容重置为父组件传入的富文本初始值
    edit.value.txt.html(editorItem.value)
  }
}

// 表单验证
let validate = () => {
  return form.value!.validate
}

// 获取表单数据,不能直接把model.value直接分发出去，那样只能拿到初始值，需要用方法包装才行,
let getFormData = () => {
  return model.value
}

// 分发重置方法
defineExpose({
  resetFields,
  validate,
  getFormData
})

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