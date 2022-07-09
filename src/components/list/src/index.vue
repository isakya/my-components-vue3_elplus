<template>
  list
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { ListOptions, ActionOptions } from './types'
let props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
</style>