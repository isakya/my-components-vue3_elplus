<template>
  <el-form :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <el-form-item :prop="item.prop" :label="item.label" v-for="(item, index) in options" :key="index">
      <component v-model="model[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, PropType, onMounted } from "vue"
import { FormOptions } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
  // 表单配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

let model = ref<any>({})
let rules = ref<any>({})
onMounted(() => {
  let m: any = {}
  let r: any = {}
  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value
    r[item.prop!] = item.rules
  })
  model.value = cloneDeep(m)
  rules.value = cloneDeep(r)
})
</script>

<style lang="scss" scoped>
</style>