<template>
  <chooseDate @startChange="startChange" @endChange="endChange" />
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"

interface dateEndValue {
  startDate: Date,
  endDate: Date
}

// let startOptions = {
//   size: 'small',
// }

let startChange = (val: Date) => {
  console.log(val);
}
let endChange = (val: dateEndValue) => {
  console.log(val);
}
</script>

<style lang="scss" scoped>
</style>