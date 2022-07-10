<template>
  <choose-time @startChange="startChange" @endChange="endChange" />
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"

interface endValue {
  startTime: string,
  endTime: string
}

let startChange = (val: string) => {
  console.log('startTime', val)
}
let endChange = (val: endValue) => {
  console.log('endTime', val)
}

// 测试传入子组件未用props定义的属性
// let startOptions = {
//   size: 'small',
//   clearable: false
// }

</script>

<style lang="scss" scoped>
</style>