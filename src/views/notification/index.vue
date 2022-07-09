<template>
  <notification :value="50" />
  <br />
  <br />
  <notification :value="50" :max="30" />
  <br />
  <br />
  <notification :value="50" :isDot="true" />
  <br />
  <br />
  <notification icon="ChatDotRound" :value="50" :isDot="true" />
  <br />
  <br />
  <notification icon="ChatDotRound" :value="50" :isDot="true">
    <template #default>
      <list />
    </template>
  </notification>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"

</script>

<style lang="scss" scoped>
</style>