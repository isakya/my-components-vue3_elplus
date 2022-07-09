<template>
  menu
</template>

<script setup lang="ts">
import { MenuItem } from './types'
import { reactive, toRefs, ref, PropType } from "vue"

let props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  }
})

</script>

<style lang="scss" scoped>
</style>