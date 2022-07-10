<template>
  <chooseCity @change="getCity"></chooseCity>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
let getCity = (val: string) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
</style>