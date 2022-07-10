<template>
  <chooseCity @changeCity="getCity" @changeProvince="getProvince"></chooseCity>
</template>

<script setup lang="ts">
interface City {
  id: number,
  // 拼音
  spell: string,
  name: string
}
let getCity = (val: City) => {
  console.log(val)
}
let getProvince = (val: string) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
</style>