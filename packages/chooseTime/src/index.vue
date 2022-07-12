<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-time-select v-model="startTime" :max-time="endTime" class="mr-4" :placeholder="startPlaceholder"
        :start="startTimeStart" :step="startStep" :end="startTimeEnd" v-bind="$attrs.startOptions" />
    </div>
    <div>
      <el-time-select v-model="endTime" :min-time="startTime" :placeholder="endPlaceholder" :start="endTimeStart"
        :step="endStep" :end="endTimeEnd" :disabled="endTimeDisabled" v-bind="$attrs.endOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
let props = defineProps({
  // 开始时间占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间开始的选择
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '0:30'
  },
  // 开始时间结束的选择
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间开始的选择
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '0:30'
  },
  // 结束时间结束的选择
  endTimeEnd: {
    type: String,
    default: '24:00'
  }
})
let startTime = ref<string>('')
let endTime = ref<string>('')
// 是否禁用结束时间
let endTimeDisabled = ref<boolean>(true)

let emits = defineEmits(['startChange', 'endChange'])

// 监听开始时间的变化
watch(() => startTime.value, val => {
  if (val === '') {
    endTime.value = ''
    endTimeDisabled.value = true
  }
  else {
    endTimeDisabled.value = false
    // 给父组件提交事件
    emits('startChange', val)
  }
})
watch(() => endTime.value, val => {
  if (val !== '') {
    emits('endChange', {
      startTime: startTime.value,
      endTime: endTime.value
    })
  }
})
</script>

<style lang="scss" scoped>
</style>