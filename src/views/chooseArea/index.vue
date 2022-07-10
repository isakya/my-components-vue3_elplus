<template>
  <div>
    <choose-area @change="changeArea"></choose-area>
  </div>
</template>

<script setup lang="ts">
let changeArea = (val: any) => {
  console.log(val);
}

</script>

<style lang="scss" scoped>
</style>