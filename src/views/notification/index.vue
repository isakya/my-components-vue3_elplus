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
      <my-list :list="list" :actions="actions" />
    </template>
  </notification>
</template>

<script setup lang="ts">
import { list, actions } from './data'
import { reactive, toRefs, ref } from "vue"
console.log(list);


</script>

<style lang="scss" scoped>
</style>