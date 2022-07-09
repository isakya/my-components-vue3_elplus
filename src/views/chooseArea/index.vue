<template>
  <div>
    <choose-area @change="changeArea"></choose-area>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
let changeArea = (val: any) => {
  console.log(val);

}

</script>

<style lang="scss" scoped>
</style>