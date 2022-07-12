<template>
  <notification :value="50">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
  <br />
  <br />
  <br />
  <br />
  <notification :value="50" :max="30">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
  <br />
  <br />
  <br />
  <br />
  <notification icon="ChatDotRound" :value="50" :isDot="true">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
</template>

<script setup lang="ts">
import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log(val);

}
let clickAction = (val: any) => {
  console.log(val);

}

</script>

<style lang="scss" scoped>
</style>